import Image from "next/image";
import Form from "./Form";
import Header from "./Header";

// App/Header/Form bileşenlerine ayırın, kendi adlarıyla ayrı dosyalara koyun

export default function App() {
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
}
