import Link from "next/link"
export default function Milkshake() {
    return (<>
    
    <h1>Milkshake</h1>
    <ul>
        <div><input type="checkbox" id="Milkshake"/>
            <label for="Milkshake">
                Chocolate
            </label>
        </div>


        <div>
        <input type="checkbox" id="Milkshake"/>
            <label for="Milkshake">
                Morango
            </label>
        </div>

           <div>
        <input type="checkbox" id="Milkshake"/>
            <label for="Milkshake">
                Creme com Passas
            </label>
        </div>  
        
        <button>
            <Link href="/Refri">Página Anterior</Link>
        </button>
         
        <button><Link href ="/"><a>Voltar para o Inicio</a></Link></button>
        </ul>

    </>)
}