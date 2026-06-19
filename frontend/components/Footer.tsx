type Props = {
  footer: any;
};

export default function Footer({
  footer,
}: Props) {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a
            href={footer.logo.href}
            className="logo"
            dangerouslySetInnerHTML={{
              __html:
                footer.logo.text,
            }}
          />

          <p>
            Expert music education
            for all ages and
            levels. Online and
            in-person lessons in
            Melbourne,
            Australia.
          </p>
        </div>

        {footer.item.map(
          (column: any) => (
            <div
              key={column.id}
              className="footer-col"
            >
              <h5>
                {column.title}
              </h5>

              {column.items.map(
                (item: any) => (
                  <a
                    key={item.id}
                    href="#"
                    className="footer-link"
                  >
                    {
                      item.instrumentTag
                    }
                  </a>
                )
              )}
            </div>
          )
        )}
      </div>

      <div className="footer-bottom">
        <span>
          {footer.leftbottom}
        </span>

        <span>
          {footer.rightbottom}
        </span>
      </div>
    </footer>
  );
}