import "../../../../styles/pages/home/contents/HeroSocial.css";

export const HeroSocial = () => {
  return (
    <div className="d-flex justify-content-center justify-content-md-start">
      <a href="" target="_blank">
        <div className="Icon-Rounder-header me-2">
          <i class="bi bi-facebook"></i>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/company/105643401/admin/dashboard/"
        target="_blank"
      >
        <div className="Icon-Rounder-header me-2">
          <i class="bi bi-linkedin"></i>
        </div>
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=%2B94772268415&text&app_absent=0"
        target="_blank"
      >
        <div className="Icon-Rounder-header">
          <i class="bi bi-whatsapp"></i>
        </div>
      </a>
    </div>
  );
};
