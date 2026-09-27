const stages = ["commit", "build", "test", "push", "deploy"];

export function Pipeline({ label }: { label: string }) {
  return (
    <div className="rail" role="img" aria-label={label}>
      <div className="rail-track">
        {stages.map((stage, i) => {
          const isLive = i === stages.length - 1;
          return (
            <div
              key={stage}
              className={`stage ${isLive ? "stage--live" : "stage--done"}`}
            >
              <span className="node" aria-hidden="true" />
              <span className="stage-label">{stage}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
