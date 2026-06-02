import Image from "next/image";
import Link from "next/link";
import notFoundImg from "../../public/alert.jpg";

export default function NotFound() { 
  return (
    <div className="min-h-screen container mx-auto  flex items-center justify-center bg-green-50 px-4">
      
      <div className="max-w-4xl w-full text-center mt-5 bg-white shadow-xl rounded-3xl p-10 border border-green-100">
        
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={notFoundImg}
            alt="Not Found"
            width={350}
            height={350}
            className="rounded-2xl"
          />
        </div>

        {/* Text */}
        <h1 className="mt-8 text-5xl font-bold text-green-700">
          404 - Page Not Found
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back to home.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl shadow-md"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
}