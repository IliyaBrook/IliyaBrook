type PageHeadProps = {
  title: string;
  sub?: string;
};

export function PageHead({ title, sub }: PageHeadProps) {
  return (
    <div className="page-head">
      <h1 className="page-title">{title}</h1>
      {sub ? <p className="page-sub">{sub}</p> : null}
    </div>
  );
}
