export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-5">
        <h2 className="text-center text-[1.75rem] md:text-[2rem] font-light tracking-wide mb-[40px] md:mb-[50px]">
          Services
        </h2>
        <div className="max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
          <div className="text-center">
            <h3 className="text-[1.3rem] font-normal mb-[10px]">Personal Shopping</h3>
            <p className="text-[#666] text-[0.95rem]">
              Curated wardrobe selections tailored to your lifestyle and preferences.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[1.3rem] font-normal mb-[10px]">Wardrobe Styling</h3>
            <p className="text-[#666] text-[0.95rem]">
              Organize and refresh your existing closet with new combinations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[1.3rem] font-normal mb-[10px]">Personal Styling</h3>
            <p className="text-[#666] text-[0.95rem]">
              Personalized style consultations to define and enhance your unique look.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[1.3rem] font-normal mb-[10px]">Commercial Styling</h3>
            <p className="text-[#666] text-[0.95rem]">
              Professional styling services for brands, campaigns, and editorial shoots.
            </p>
          </div>
          <div className="text-center sm:col-span-2">
            <h3 className="text-[1.3rem] font-normal mb-[10px]">Special Events</h3>
            <p className="text-[#666] text-[0.95rem]">
              Look your best for weddings, photoshoots, or important occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
