export const Button = ({ children, coloured = false, href, blank = false, full = false, disabled = false, ...params }) => (
  <div className={disabled ? 'cursor-not-allowed' : 'cursor-pointer'}>
    <button className={`${disabled ? 'dark:bg-gray-300 cursor-text bg-gray-200 border-gray-400 border text-gray-800 pointer-events-none' : coloured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-400 border dark:border-none'} py-2 px-8 rounded-lg dark:border-none dark:shadow-lg font-medium focus:outline-none transition-colors duration-200 ${full ? 'w-full' : ''}`} onClick={() => goTo(href, blank)} disabled={disabled} {...params}>
      {children}
    </button>
  </div>
);

export const goTo = (link, blank) => window.open(link, blank ? '_blank' : '_self');