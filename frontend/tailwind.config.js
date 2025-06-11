export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl',
    'font-thin', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold',
    'text-left', 'text-center', 'text-right', 'text-justify',
    'italic', 'underline', 'line-through',
    
    'text-black', 'text-white', 'text-gray-500', 'text-gray-700', 'text-red-500', 'text-blue-500', 'text-green-500',
    'bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-red-100', 'bg-blue-100', 'bg-green-100',
    'border-gray-300', 'border-gray-500', 'border-red-500', 'border-blue-500',

    'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'px-2', 'px-4', 'py-2', 'py-4',
    'm-1', 'm-2', 'm-3', 'm-4', 'mx-auto', 'my-2',

    'flex', 'inline-flex', 'justify-start', 'justify-center', 'justify-between', 'items-start', 'items-center',
    'grid', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'gap-2', 'gap-4', 'gap-6',
    'w-full', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4',
    'h-full', 'min-h-screen',

    'border', 'border-2', 'border-b', 'border-t', 'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl',

    'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl',

    { pattern: /^bg-(red|blue|green|gray|yellow|indigo)-(100|200|300|400|500)$/ },
    { pattern: /^text-(red|blue|green|gray|yellow|indigo)-(500|600|700)$/  },
    { pattern: /^border-(gray|blue|green|red)-(300|500|700)$/ },

    { pattern: /^w-(\d{1,3}|full|1\/2|1\/3|2\/3)$/ },
    { pattern: /^h-(\d{1,3}|full|screen)$/ },
    { pattern: /^p[xtblr]?-\d{1,2}$/ },
    { pattern: /^m[xtblr]?-\d{1,2}$/ },

    'overflow-hidden', 'overflow-x-auto', 'overflow-y-auto',
    'whitespace-nowrap', 'break-words',
    'uppercase', 'lowercase', 'capitalize',
    'tracking-wide'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px', // nouvelle taille responsive
      },
    },
  },
  plugins: [],
};
