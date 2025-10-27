
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024 
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'application/pdf']

const uploadSchema = z.object({
  name: z.string().min(2, 'Nama terlalu pendek'),
  email: z.string().email('Email tidak valid'),
  description: z.string().max(500, 'Maksimal 500 karakter').optional(),
})

type FormData = z.infer<typeof uploadSchema>

export default function AdvancedUploadForm() {
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(uploadSchema),
    mode: 'onChange',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : []
    validateAndPreviewFiles(selectedFiles)
  }

  const validateAndPreviewFiles = (selectedFiles: File[]) => {
    const invalidFile = selectedFiles.find(
      f => !ALLOWED_TYPES.includes(f.type) || f.size > MAX_FILE_SIZE
    )
    if (invalidFile) {
      setFileError('Hanya file gambar/video/pdf dan maksimal 5MB.')
      return
    }
    setFileError(null)
    setFiles(selectedFiles)
    setPreviews(selectedFiles.map(file => URL.createObjectURL(file)))
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setPreviews(prev => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: FormData) => {
    if (files.length === 0) {
      setFileError('Minimal unggah 1 file.')
      return
    }

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('description', data.description || '')
    files.forEach(file => formData.append('files', file))

    setUploading(true)
    setProgress(0)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/api/upload')
    xhr.upload.onprogress = e => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100))
    }
    xhr.onload = () => {
      setUploading(false)
      setResult(xhr.status === 200 ? 'Upload berhasil 🎉' : 'Upload gagal ❌')
    }
    xhr.onerror = () => {
      setUploading(false)
      setResult('Terjadi kesalahan jaringan.')
    }
    xhr.send(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">📤 Advanced Upload Form</h2>


      <div>
        <label className="block text-sm font-medium mb-1">Nama</label>
        <input
          {...register('name')}
          className="w-full border rounded-md p-2"
          placeholder="Nama lengkap"
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>


      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          {...register('email')}
          className="w-full border rounded-md p-2"
          placeholder="Alamat email"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>


      <div>
        <label className="block text-sm font-medium mb-1">Deskripsi</label>
        <textarea
          {...register('description')}
          className="w-full border rounded-md p-2"
          rows={3}
          placeholder="Deskripsi singkat (opsional)"
        />
        {errors.description && (
          <p className="text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

 
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-dashed border-2 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={ALLOWED_TYPES.join(',')}
          className="hidden"
        />
        <p>Tarik & lepas file atau klik untuk memilih</p>
        <p className="text-xs text-gray-500">(Maks. 5MB per file)</p>
      </div>
      {fileError && <p className="text-sm text-red-600">{fileError}</p>}


      {previews.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-3">
          {previews.map((src, i) => (
            <div key={i} className="relative border rounded p-2">
              {files[i].type.startsWith('image/') ? (
                <img src={src} alt={files[i].name} className="w-full h-32 object-cover rounded" />
              ) : files[i].type.startsWith('video/') ? (
                <video src={src} controls className="w-full h-32 rounded" />
              ) : (
                <div className="flex items-center justify-center h-32 bg-gray-100 text-sm">
                  📄 {files[i].name}
                </div>
              )}
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded px-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}


      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

   
      {result && <p className="text-center mt-3 text-sm">{result}</p>}

      <button
        type="submit"
        disabled={!isValid || uploading}
        className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? 'Mengunggah...' : 'Kirim'}
      </button>
    </form>
  )
}
