const Contacts = () => {
  return (
    <div className="bg-transparent py-10">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          <div className="flex flex-col justify-between space-y-6 rounded-2xl shadow-xl px-8 py-10 bg-white h-full w-full">
            <h2 className="text-3xl font-medium text-gray-900 tracking-wide">
              Мы находимся <br /> в офисе Ташкент
            </h2>

            <div className="flex items-center justify-start space-x-12 w-full">
              <div className="flex flex-col justify-center items-start space-y-2">
                <span className="text-sm font-medium">Телефон:</span>
                <span className="text-gray-700">
                  (+99871) 203-01-01, 242-48-93
                </span>
              </div>

              <div className="flex flex-col justify-center items-start space-y-2">
                <span className="text-sm font-medium">E-mail:</span>
                <span className="text-gray-700">farmkomitet@ssv.uz</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-medium space-y-2">Адрес:</span>
              <span className="text-gray-700">
                Republic of Uzbekistan, Tashkent, Mirabad district, Kizil arvat
                str. 2-passage, house 37
              </span>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="w-full h-full bg-gray-200 rounded-2xl border-2 border-gray-300 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3651843666824!2d69.28562767646486!3d41.31180437149937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cf8f50b72d%3A0x70fcbe56e48b55bc!2sWestminster%20International%20University%20in%20Tashkent!5e0!3m2!1sen!2s!4v1694019188083!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="WIUT Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
