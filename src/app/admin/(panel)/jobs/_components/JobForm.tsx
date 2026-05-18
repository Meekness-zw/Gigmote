import Link from "next/link";

type JobInput = {
  title?: string | null;
  department?: string | null;
  location?: string | null;
  employmentType?: string | null;
  salaryRange?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  responsibilities?: string | null;
  requirements?: string | null;
  niceToHave?: string | null;
  benefits?: string | null;
  applyEmail?: string | null;
  status?: string | null;
};

const employmentOptions = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
];

const fieldClass =
  "w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-hugo-black focus:outline-none rounded-lg text-hugo-black placeholder:text-hugo-black/40";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1.5";

export function JobForm({
  action,
  job,
  submitLabel,
}: {
  action: (formData: FormData) => Promise<void> | void;
  job?: JobInput;
  submitLabel: string;
}) {
  return (
    <form action={action} className="space-y-10">
      <Section title="Basics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className={labelClass}>Job title *</label>
            <input
              name="title"
              required
              defaultValue={job?.title ?? ""}
              className={fieldClass}
              placeholder="e.g. Senior Frontend Engineer"
            />
          </div>
          <div>
            <label className={labelClass}>Department</label>
            <input
              name="department"
              defaultValue={job?.department ?? ""}
              className={fieldClass}
              placeholder="e.g. Engineering"
            />
          </div>
          <div>
            <label className={labelClass}>Location *</label>
            <input
              name="location"
              required
              defaultValue={job?.location ?? ""}
              className={fieldClass}
              placeholder="e.g. Remote – Africa"
            />
          </div>
          <div>
            <label className={labelClass}>Employment type *</label>
            <select
              name="employmentType"
              required
              defaultValue={job?.employmentType ?? "Full-time"}
              className={fieldClass}
            >
              {employmentOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Salary range</label>
            <input
              name="salaryRange"
              defaultValue={job?.salaryRange ?? ""}
              className={fieldClass}
              placeholder="e.g. $80k – $120k"
            />
          </div>
        </div>
      </Section>

      <Section title="Summary">
        <div>
          <label className={labelClass}>
            Short description (shown on job cards) *
          </label>
          <textarea
            name="shortDescription"
            required
            rows={2}
            defaultValue={job?.shortDescription ?? ""}
            className={`${fieldClass} resize-none`}
            placeholder="One or two sentences."
          />
        </div>
        <div>
          <label className={labelClass}>Full description *</label>
          <textarea
            name="description"
            required
            rows={6}
            defaultValue={job?.description ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="The overview — what this role is about."
          />
        </div>
      </Section>

      <Section title="Details">
        <div>
          <label className={labelClass}>Responsibilities *</label>
          <textarea
            name="responsibilities"
            required
            rows={5}
            defaultValue={job?.responsibilities ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="One per line. e.g.&#10;- Build & maintain frontend features&#10;- Collaborate with design and product"
          />
        </div>
        <div>
          <label className={labelClass}>Requirements *</label>
          <textarea
            name="requirements"
            required
            rows={5}
            defaultValue={job?.requirements ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="One per line."
          />
        </div>
        <div>
          <label className={labelClass}>Nice to have</label>
          <textarea
            name="niceToHave"
            rows={3}
            defaultValue={job?.niceToHave ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="One per line."
          />
        </div>
        <div>
          <label className={labelClass}>Benefits</label>
          <textarea
            name="benefits"
            rows={3}
            defaultValue={job?.benefits ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="One per line."
          />
        </div>
      </Section>

      <Section title="Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Apply notification email</label>
            <input
              type="email"
              name="applyEmail"
              defaultValue={job?.applyEmail ?? ""}
              className={fieldClass}
              placeholder="Defaults to admin email if blank"
            />
          </div>
          <div>
            <label className={labelClass}>Status</label>
            <select
              name="status"
              defaultValue={job?.status ?? "published"}
              className={fieldClass}
            >
              <option value="published">Published (visible on /jobs)</option>
              <option value="draft">Draft (hidden)</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </Section>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="h-9 px-5 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
        >
          {submitLabel}
        </button>
        <Link
          href="/admin"
          className="h-9 px-3 inline-flex items-center text-sm font-medium text-hugo-black/70 hover:text-hugo-black"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-hugo-black/5 p-5 md:p-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-hugo-black/60 border-b border-hugo-black/5 pb-3 mb-5">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}
