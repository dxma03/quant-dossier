import React, { PropsWithChildren } from "react";
import "../styles/design-tokens.css";
import "./design-system.css";

type BaseProps = PropsWithChildren<{ className?: string }>;

export function Container({ className = "", children }: BaseProps) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

export function Section({ className = "", children }: BaseProps) {
  return <section className={`section ${className}`.trim()}>{children}</section>;
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="section__header">
        <div>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {actions}
      </div>
    </header>
  );
}

export function MetricCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: { value: string; direction: "up" | "down" };
}) {
  return (
    <article className="card metric-card">
      <div className="metric-card__label">{label}</div>
      <div className="metric-card__value">{value}</div>
      {delta ? (
        <div className={`metric-card__delta metric-card__delta--${delta.direction}`}>
          {delta.value}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectCard({
  title,
  description,
  tags = [],
  footer,
}: {
  title: string;
  description: string;
  tags?: Array<{ label: string; tone?: "neutral" | "accent" | "success" }>;
  footer?: React.ReactNode;
}) {
  return (
    <article className="card project-card">
      <div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
      <div>
        {tags.map((tag) => (
          <Tag key={tag.label} tone={tag.tone}>
            {tag.label}
          </Tag>
        ))}
      </div>
      {footer ? <div className="project-card__footer">{footer}</div> : null}
    </article>
  );
}

export function ChartShell({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="card chart-shell">
      <h3 className="chart-shell__title">{title}</h3>
      <div className="chart-shell__body">{children ?? "Chart region"}</div>
    </section>
  );
}

export function Tag({
  children,
  tone = "neutral",
}: PropsWithChildren<{ tone?: "neutral" | "accent" | "success" }>) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}

export function Button({
  children,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button className={`button button--${variant}`} {...props}>
      {children}
    </button>
  );
}
