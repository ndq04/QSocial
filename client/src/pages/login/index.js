function Login() {
  return (
    <div className='login bg-[#f0f2f5] select-none h-screen flex items-center'>
      <div className='login-content m-auto flex items-center'>
        <div className='login-left flex flex-col bg-white rounded-lg shadow-md px-4 py-10 w-[40%] mr-10'>
          <div className='flex flex-col border-b border-gray-300 pb-5 mb-5'>
            <input
              type='text'
              placeholder='Email'
              className='mb-4 border-2 rounded-md 
              focus:border-blue-500 outline-none py-3 px-3 text-lg'
            />
            <input
              type='text'
              placeholder='Mật khẩu'
              className='border-2 rounded-md 
              focus:border-blue-500 outline-none py-3 px-3 text-lg'
            />

            <button
              className='bg-blue-500 hover:bg-blue-600 
            text-white text-lg font-semibold py-2.5 rounded-lg mt-10'
            >
              Đăng nhập
            </button>
          </div>
          <button
            className='bg-[#00a400] hover:bg-[#048004]
            text-white text-lg font-semibold py-2.5 rounded-lg text-center w-[50%] mx-auto'
          >
            Tạo tài khoản mới
          </button>
        </div>
        <div className='login-right w-[50%]'>
          <p className='font-bold text-6xl text-blue-500'>
            Q Social
          </p>
          <p className='text-2xl font-medium mt-5'>
            Q Social giúp bạn kết nối và chia sẻ với mọi
            người trong cuộc sống của bạn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
