import { component$, useStyles$, useSignal } from '@builder.io/qwik';
import NavbarStyles from './navbarStyles.css?inline'


export default component$(() => {
    useStyles$(NavbarStyles)
    const isOpen = useSignal(false);
    return (
        <nav class="mx-20 mt-16">
            <div class="flex justify-between">

                <div class="font-primary uppercase font-semibold text-[30px] mt-2 tracking-widest cursor-pointer">
                    Writespace
                </div>

                <div class="flex ">
                    <ul class={`flex lg:relative absolute flex-col lg:flex-row xl:gap-20 lg:gap-6 items-center lg:left-0 transition-all duration-500 w-full mt-16 lg:mt-0
                     ${isOpen.value ?  'left-[-800px] ' : 'left-[0px]'}`}>
                        <li><button class="uppercase text-[20px] text-[#1E1E1E] font-semibold">Home</button></li>
                        <li><button class="uppercase text-[20px] text-[#1E1E1E] font-semibold">About</button></li>
                        <li><button class="uppercase text-[20px] text-[#1E1E1E] font-semibold">Blog</button></li>
                        <li><button class="uppercase text-[20px] text-[#1E1E1E] font-semibold">Contact</button></li>
                        <li><button class="w-[210px] h-[65px] text-[#FFF7E4] bg-[#1E1E1E] uppercase text-[20px] mt-[-8px] font-semibold">Signup</button></li>
                    </ul>

                    <div >
                        <button class="mt-4 lg:invisible visible"
                            onClick$={() => {
                                isOpen.value = !isOpen.value;
                            }}>
                            {isOpen.value ? (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>)}
                        </button>
                    </div>

                </div>



            </div>
        </nav>)
});
