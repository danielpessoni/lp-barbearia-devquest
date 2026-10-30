import logoBarbearia from '../../assets/logo-barbearia.jpg'
import { Button } from "./Button"

export const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
            <div className="flex items-center gap-2">
                <img src={logoBarbearia} alt="Logo Barbearia Navalha" className="w-10 h-10 rounded object-cover" />
                <span className="text-white">Barbearia Navalha</span>

            </div>
            <nav className="flex items-center border">
                <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
                    <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
                    >Início</li>
                    <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
                    >Serviços</li>
                    <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
                    >Contato</li>

                    <li className="pt-2">
                        <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                                window.open("https://wa.me/5585999999999", "_blank");
                            }}
                        >
                            Agendar
                        </Button>
                    </li>

                </ul>
            </nav>
        </header>
    )
}