import Image from "next/image";

const Header = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src="/mark.svg"
          alt="Şirketiniz"
          width={500}
          height={500}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Hesabınıza giriş yapın
        </h2>
      </div>
    </div>
  );
};

export default Header;
