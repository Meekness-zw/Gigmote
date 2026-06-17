import Link from "next/link";

type CourseInput = {
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  price?: string | null;
  outcomes?: string | null;
  curriculum?: string | null;
  instructor?: string | null;
  instructorBio?: string | null;
  features?: string | null;
  enrollUrl?: string | null;
  status?: string | null;
  featured?: boolean | null;
};

const fieldClass =
  "w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-hugo-black focus:outline-none rounded-lg text-hugo-black placeholder:text-hugo-black/40";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1.5";

export function CourseForm({
  action,
  course,
  submitLabel,
}: {
  action: (formData: FormData) => Promise<void> | void;
  course?: CourseInput;
  submitLabel: string;
}) {
  return (
    <form action={action} className="space-y-10">
      <Section title="Basics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className={labelClass}>Course title *</label>
            <input
              name="title"
              required
              defaultValue={course?.title ?? ""}
              className={fieldClass}
              placeholder="e.g. AI at Work"
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Tagline *</label>
            <input
              name="tagline"
              required
              defaultValue={course?.tagline ?? ""}
              className={fieldClass}
              placeholder="One-sentence hook shown under the title"
            />
          </div>
          <div>
            <label className={labelClass}>Price *</label>
            <input
              name="price"
              required
              defaultValue={course?.price ?? ""}
              className={fieldClass}
              placeholder="e.g. $10 or Free"
            />
          </div>
          <div>
            <label className={labelClass}>Enroll URL *</label>
            <input
              name="enrollUrl"
              required
              type="url"
              defaultValue={course?.enrollUrl ?? ""}
              className={fieldClass}
              placeholder="https://gigmote.teachable.com/p/..."
            />
          </div>
        </div>
      </Section>

      <Section title="Content">
        <div>
          <label className={labelClass}>Description *</label>
          <textarea
            name="description"
            required
            rows={5}
            defaultValue={course?.description ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="Full overview of the course — what it covers and why it matters."
          />
        </div>
        <div>
          <label className={labelClass}>Learning outcomes (one per line) *</label>
          <textarea
            name="outcomes"
            required
            rows={5}
            defaultValue={course?.outcomes ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="e.g.&#10;Accelerating research velocity and executive drafting&#10;Conducting data-driven analysis with structural efficiency"
          />
        </div>
        <div>
          <label className={labelClass}>Curriculum *</label>
          <p className="text-xs text-hugo-black/50 mb-2">
            Use &quot;## Module N: Title&quot; for module headers, then &quot;- item&quot; for lessons.
          </p>
          <textarea
            name="curriculum"
            required
            rows={14}
            defaultValue={course?.curriculum ?? ""}
            className={`${fieldClass} resize-y font-mono text-xs`}
            placeholder={`## Module 1: Introduction\n- Lesson one\n- Lesson two\n\n## Module 2: Core Skills\n- Lesson one`}
          />
        </div>
        <div>
          <label className={labelClass}>Value propositions (one per line)</label>
          <textarea
            name="features"
            rows={3}
            defaultValue={course?.features ?? ""}
            className={`${fieldClass} resize-y`}
            placeholder="e.g.&#10;Strategic: Aligns AI initiatives with core business goals&#10;Hands-on: Build, test, and deploy practical automations"
          />
        </div>
      </Section>

      <Section title="Instructor">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className={labelClass}>Instructor name *</label>
            <input
              name="instructor"
              required
              defaultValue={course?.instructor ?? ""}
              className={fieldClass}
              placeholder="e.g. Dakarai Mshoperi"
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Instructor bio</label>
            <textarea
              name="instructorBio"
              rows={4}
              defaultValue={course?.instructorBio ?? ""}
              className={`${fieldClass} resize-y`}
              placeholder="Short background, credentials, and teaching philosophy."
            />
          </div>
        </div>
      </Section>

      <Section title="Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Status</label>
            <select
              name="status"
              defaultValue={course?.status ?? "published"}
              className={fieldClass}
            >
              <option value="published">Published (visible on /training)</option>
              <option value="draft">Draft (hidden)</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Featured</label>
            <select
              name="featured"
              defaultValue={course?.featured ? "true" : "false"}
              className={fieldClass}
            >
              <option value="false">No</option>
              <option value="true">Yes — show prominently</option>
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
          href="/admin/courses"
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
