interface CommandLineProps {
  command: string;
  output?: React.ReactNode;
  showPrompt?: boolean;
}

export function CommandLine({
  command,
  output,
  showPrompt = true,
}: CommandLineProps) {
  return (
    <div className="font-mono">
      {showPrompt && (
        <div className="flex items-center gap-2">
          <span className="text-[var(--syntax-type)]">tomaz@portfolio</span>
          <span className="text-[var(--text-primary)]">:</span>
          <span className="text-[var(--syntax-keyword)]">~</span>
          <span className="text-[var(--text-primary)]">$</span>
          <span className="text-[var(--text-primary)] ml-2">{command}</span>
        </div>
      )}
      {output && <div className="mt-2 text-[var(--text-primary)]">{output}</div>}
    </div>
  );
}
