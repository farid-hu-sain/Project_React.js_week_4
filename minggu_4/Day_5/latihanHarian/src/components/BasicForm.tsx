import { useForm } from "react-hook-form"

interface FormData {
  firstname: string
  lastname: string
  email: string
}

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-sky-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-5 border border-sky-200"
      >
        <h2 className="text-2xl font-semibold text-center text-sky-600 mb-4">
          Registrasi
        </h2>

        <div>
          <input
            {...register("firstname", { required: "Nama depan harus diisi" })}
            placeholder="Masukkan nama depan"
            className="w-full px-3 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.firstname && (
            <p className="text-sm text-red-500 mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("lastname", { required: "Nama belakang harus diisi" })}
            placeholder="Masukkan nama belakang"
            className="w-full px-3 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.lastname && (
            <p className="text-sm text-red-500 mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email wajib diisi",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Alamat email tidak valid",
              },
            })}
            placeholder="Masukkan email"
            className="w-full px-3 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-md text-white font-semibold transition 
          ${isSubmitting
              ? "bg-sky-300 cursor-not-allowed"
              : "bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
            }`}
        >
          {isSubmitting ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  )
}
