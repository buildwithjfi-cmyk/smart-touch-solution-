// Logos of the brands we repair, shown as a continuously scrolling ticker.
// Files live in public/brands/. To swap in a real logo for a text-only brand, add its file and set `logo`.
const brands = [
  { name: 'LG', logo: '/brands/lg.svg' },
  { name: 'Samsung', logo: '/brands/samsung.svg' },
  { name: 'Bosch', logo: '/brands/bosch.svg' },
  { name: 'IFB', logo: null },
  { name: 'Panasonic', logo: '/brands/panasonic.svg' },
  { name: 'Siemens', logo: '/brands/siemens.svg' },
  { name: 'Hitachi', logo: '/brands/hitachi.svg' },
  { name: 'Toshiba', logo: '/brands/toshiba.svg' },
  { name: 'Daikin', logo: '/brands/daikin.svg' },
  { name: 'Voltas', logo: '/brands/voltas.svg' },
];

export default function BrandLogos() {
  return (
    <div className="space-y-3">
      <h2 className="text-center text-xs font-bold uppercase tracking-wider text-stone-600">Brands We Repair</h2>

      {/* Screen readers get one plain list; the animated copies are hidden from them */}
      <ul className="sr-only">
        {brands.map((brand) => <li key={brand.name}>{brand.name}</li>)}
      </ul>

      <div className="brand-ticker overflow-hidden no-scrollbar" aria-hidden="true">
        <ul className="brand-ticker-track flex w-max">
          {[0, 1].flatMap((copy) => brands.map((brand) => (
            <li
              key={`${copy}-${brand.name}`}
              className="shrink-0 mr-3 sm:mr-4 w-32 sm:w-40 h-16 sm:h-20 rounded-xl border border-stone-200 bg-white flex items-center justify-center px-4"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt=""
                  className="max-h-8 sm:max-h-9 max-w-full w-auto object-contain"
                />
              ) : (
                <span className="text-2xl font-black tracking-tight text-[#0055a5]">{brand.name}</span>
              )}
            </li>
          )))}
        </ul>
      </div>

      <p className="text-center text-[11px] text-stone-500">
        Brand names and logos are trademarks of their respective owners. Smart Touch Appliances is an independent repair service.
      </p>
    </div>
  );
}
