import { useState, useMemo } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Показываем сообщение об успешной отправке
  const [submitted, setSubmitted] = useState(false);
  // Храним ошибки для каждого поля
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Валидация email вынесена отдельно
  const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;

  // Проверка значения поля
  function validate(name: string, value: string) {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required.";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!emailRegex.test(value)) return "Enter a valid email.";
        return "";
      case "message":
        return value.trim() ? "" : "Message is required.";
      default:
        return "";
    }
  }

  // Обработка поля: обновляет значение и ошибку
  function handleField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  }

  // Оптимизированная проверка валидности формы
  const isValid = useMemo(() => {
    return (
      Object.values(errors).every((err) => err === "") &&
      Object.values(formData).every((val) => val.trim())
    );
  }, [errors, formData]);

  // Отправка формы: финальная проверка и очистка
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = {
      name: validate("name", formData.name),
      email: validate("email", formData.email),
      message: validate("message", formData.message),
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).every((err) => err === "")) return;
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    // white background + padding/rounded/shadow to give breathing room and lightness
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4 bg-white p-6 rounded shadow-md"
    >
      {submitted && (
        // temporary success message shown after submission
        <p className="text-green-600 text-sm transition-opacity duration-700">
          Thank you! Your message has been sent.
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleField}
          className={`w-full border px-3 py-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleField}
          className={`w-full border px-3 py-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleField}
          rows={4}
          className={`w-full border px-3 py-2 ${errors.message ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white px-4 py-2 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!isValid}
      >
        Send
      </button>
    </form>
  );
}
