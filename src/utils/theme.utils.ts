type Theme = "dark" | "light"
const THEME_KEY = "theme"

export const setUpInitialTheme = () => {
  const theme = (localStorage.getItem(THEME_KEY) as Theme) ?? "dark"
  const html = document.documentElement;
  if (!html) return console.warn("html tag does not exist");

  theme === "dark" ? html.classList.add('dark') : html.classList.remove('dark')
}

export const onToggleTheme = () => {
  const html = document.documentElement;
  if (!html) return console.warn("html tag does not exist");
  const currentTheme = html.classList.contains("dark") ? "dark" : "light"
  const newTheme: Theme = currentTheme === "dark" ? "light" : "dark"
  if (newTheme === "dark") {
    html.classList.add('dark')
    localStorage.setItem(THEME_KEY, "dark")
  } else {
    html.classList.remove('dark')
    localStorage.setItem(THEME_KEY, "light")
  }
};