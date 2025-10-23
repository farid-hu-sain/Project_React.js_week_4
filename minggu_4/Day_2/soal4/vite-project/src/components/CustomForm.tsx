import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function CustomForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (key: keyof FormData, val: string) => {
    switch (key) {
      case "name":
        return val.length < 3 ? "Nama terlalu pendek" : "";
      case "email":
        return !val.includes("@") ? "Email tidak valid" : "";
      case "message":
        return val.length < 10 ? "Pesan terlalu singkat" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name as keyof FormData, value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = Object.entries(form).reduce((acc, [key, val]) => {
      const err = validate(key as keyof FormData, val);
      if (err) acc[key as keyof FormData] = err;
      return acc;
    }, {} as Partial<Record<keyof FormData, string>>);

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) alert(`Pesan dari ${form.name} terkirim!`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.5rem", maxWidth: 400 }}>
      <input name="name" placeholder="Nama" value={form.name} onChange={handleChange} />
      {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

      <textarea name="message" placeholder="Pesan" value={form.message} onChange={handleChange} />
      {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}

      <button type="submit">Kirim</button>
    </form>
  );
}
