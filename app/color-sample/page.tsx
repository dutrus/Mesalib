export default function ColorSamplePage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Muestra de Colores MESALIB</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <ColorSample name="Background" className="bg-background text-foreground" />
        <ColorSample name="Foreground" className="bg-foreground text-background" />
        <ColorSample name="Primary" className="bg-primary text-primary-foreground" />
        <ColorSample name="Secondary" className="bg-secondary text-secondary-foreground" />
        <ColorSample name="Accent" className="bg-accent text-accent-foreground" />
        <ColorSample name="Muted" className="bg-muted text-muted-foreground" />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Ejemplo de Uso</h2>
        <div className="bg-background p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-2">Título Principal</h3>
          <p className="text-foreground mb-4">
            Este es un ejemplo de texto normal en el color de primer plano predeterminado.
          </p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Botón Principal</button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded ml-2">Botón Secundario</button>
        </div>
      </div>
    </div>
  )
}

function ColorSample({ name, className }: { name: string; className: string }) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <p className="font-semibold">{name}</p>
      <p className="text-sm opacity-80">Ejemplo de texto</p>
    </div>
  )
}

