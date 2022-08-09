import Link from "next/link"
export default function Refri() {
    return (<>
    
    <h1>Refri</h1>
    <ul>
        <div><input type="checkbox" id="Refri"/>
            <label for="Refri">
                Cola
            </label>
        </div>


        <div>
        <input type="checkbox" id="Refri"/>
            <label for="Refri">
                Laranja
            </label>
        </div>

           <div>
        <input type="checkbox" id="Refri"/>
            <label for="Refri">
                Guaraná
            </label>
        </div>  
        
        <button>
            <Link href="/Hamburguer">Página Anterior</Link>
        </button>
         
        <button>
            <Link href="/Milkshake">Próxima Página</Link>
        </button>

        <button><Link href ="/"><a>Voltar para o Inicio</a></Link></button>
        </ul>

    </>)
}