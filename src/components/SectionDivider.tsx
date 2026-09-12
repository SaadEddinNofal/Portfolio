export function SectionDivider({ branch }: { branch: string }) {
  return (
    <div className="section-divider" role="presentation" aria-hidden="true">
      <div className="section-divider__line">
        <span className="section-divider__rail" />
        <span className="section-divider__label">
          <span className="section-divider__dot" />
          {branch}
        </span>
        <span className="section-divider__rail" />
      </div>
    </div>
  );
}