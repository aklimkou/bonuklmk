export function Footer() {
  return (
    <footer className="px-5 md:px-10 py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-serif text-lg tracking-[0.04em] text-foreground uppercase">
          Bonu Klimkou
        </span>
        <span className="text-[11px] text-muted-foreground tracking-[0.15em]">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
