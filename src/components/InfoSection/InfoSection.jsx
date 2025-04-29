function InfoSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 my-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <img
                        src="https://i.pinimg.com/736x/b2/f5/6e/b2f56edb4bcd07fcc13f553ec1f9b862.jpg"
                        className="w-full"
                        alt=""
                        />
                    </div>

                    <div className="md:col-span-1">
                        <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>

                        <p className="mt-4 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                            sequi.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;