export default function Button(props) {
  return (
    <button
      className={`

    ${props.color === 'pink' &&
        'text-[#F5F5F5] bg-[#C92071] hover:bg-[#991956] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed w-[00px] h-[32px] py-2 px-16 ml-20 rounded-lg transition-colors duration-200 text-center hover:text-white'
        }
    ${props.type === 'link' && 'text-[#C92071] underline'}

    ${props.color === 'white' &&
        'text-[#C92071] bg-[#F5F5F5] hover:bg-[#B5B6F2] hover:text-[#F5F5F5] disabled:opacity-50 disabled:border disabled:border-[#C92071] disabled:cursor-not-allowed'
        }

    ${props.color === 'yellow' &&
        'text-[#f5f5f5] bg-[#FFB31F] hover:bg-[#CF8900] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed'
        }

    ${props.type === 'default' &&
        'px-16 py-4 w-full sm:w-auto text-base font-bold leading-6 tracking-wider rounded-md '
        }

    ${props.type === 'filter' &&
        'px-3 py-3 w-full sm:w-auto text-sm leading-5 tracking-wider rounded border-solid border-[#474747] border-2'
        }
    ${props.color === 'yellow-full' &&
        'text-[#f5f5f5] bg-[#FFB31F] !w-full hover:bg-[#CF8900] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed'
        }
    ${props.type === 'full' &&
        'px-9 py-3 w-full text-sm font-bold leading-5 tracking-wider rounded lg:text-[16px]'
        }

    `}
    >
      {props.title || props.children}
    </button>
  );
}
