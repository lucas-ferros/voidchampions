import Link from "next/link"
export default function Hamburguer() {
    return (<>
    
    <h1>Hamburguer</h1>
    <ul>
        <div><input type="checkbox" id="sandwiches"/>
            <label for="sandwiches">
                Clássico
            </label>
        </div>


        <div>
        <input type="checkbox" id="sandwiches"/>
            <label for="sandwiches">
                Bovino
            </label>
        </div>

           <div>
        <input type="checkbox" id="sandwiches"/>
            <label for="sandwiches">
                Suíno
            </label>
        </div>  
        

         
        <button>
            <Link href="/Refri">Próxima Página</Link>
        </button>

        <button><Link href ="/"><a>Voltar para o Inicio</a></Link></button>
        </ul>

    </>)
}