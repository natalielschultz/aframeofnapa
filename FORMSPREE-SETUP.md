# Connect Inquiry Form to Formspree

The InquiryForm component at `src/components/sections/InquiryForm.tsx` already has all the fields and validation. It just needs one change: the `handleSubmit` function needs to actually send data to Formspree instead of only setting `submitted = true`.

## What to change

In `src/components/sections/InquiryForm.tsx`, replace the `handleSubmit` function (lines 92-100) with this:

```tsx
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  const response = await fetch("https://formspree.io/f/maqloyrw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);
  } else {
    setErrors({ form: "Something went wrong. Please try again." });
  }
}
```

## Also add a general error message

Right before the `<Button>` near the bottom of the form (around line 272), add this:

```tsx
{errors.form && (
  <p className="font-sans text-xs text-red-700 mt-1">
    {errors.form}
  </p>
)}
```

That's it. No new packages needed. Submissions will go straight to the email you set up in Formspree.
