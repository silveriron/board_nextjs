export default function Login() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-96">
        <h1 className="text-4xl font-bold mb-8 text-center">LOGIN</h1>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span>Email</span>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password</span>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
          </label>
          <button className="bg-slate-500 text-white rounded-md p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
