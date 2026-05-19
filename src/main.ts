import './style.css'
import {
  commandsEn,
  workflowsEn,
  extensionsEn,
  conceptsEn,
  tracksEn,
  casesEn,
  strategiesEn,
  safetyTipsEn,
  glossaryEn,
} from './data-en'

type Lang = 'ru' | 'en'
type Theme = 'light' | 'dark'

let lang: Lang = ((localStorage.getItem('lang') as Lang) === 'en') ? 'en' : 'ru'
let theme: Theme = ((localStorage.getItem('theme') as Theme) === 'dark') ? 'dark' : 'light'

document.documentElement.setAttribute('data-theme', theme)
document.documentElement.lang = lang

const ui = {
  ru: {
    navAria: 'Основная навигация',
    nav: { basics: 'Основы', start: 'Старт', commands: 'Команды', workflow: 'Workflow', cases: 'Случаи', strategies: 'Слияние', safety: 'Безопасность', extensions: 'Расширения', extWorkflow: 'Экстеншены в деле', flags: 'Флаги', glossary: 'Глоссарий', tracks: 'Треки' },
    heroEyebrow: 'GitHub + VS Code для команды',
    heroTitle: 'Гайд по GitHub с нуля до уверенного pull request',
    heroLead: 'Пошаговая инструкция для обычного пользователя: установка, команды Git, работа в VS Code, реальные командные процессы, ревью, конфликты и полезные расширения.',
    heroBtnStart: 'Начать с нуля',
    heroBtnFlow: 'Посмотреть workflow',
    terminalAria: 'Визуализация рабочего процесса GitHub',
    eyebrows: { basics: '01 / основы', start: '02 / подготовка', commands: '03 / команды', workflow: '04 / командная работа', cases: '05 / из жизни', strategies: '06 / слияние PR (pull request)', safety: '07 / безопасность и гигиена', extensions: '08 / VS Code', extWorkflow: '09 / экстеншены в деле', flags: '10 / флаги команд', glossary: '11 / словарь', tracks: '12 / треки прокачки' },
    h2: {
      basics: 'Что есть что: основные понятия простыми словами',
      start: 'Что настроить перед первой задачей',
      commands: 'Команды Git простым языком',
      workflow: 'Реальные workflow в одном проекте',
      cases: 'Реальные случаи, которые случаются с каждым',
      strategies: 'Какую стратегию слияния выбрать',
      safety: 'Что включить в любом репозитории',
      extensions: 'Расширения, которые помогают с GitHub',
      extWorkflow: 'Как расширения работают на каждом этапе',
      flags: 'Все флаги Git-команд в одном месте',
      glossary: 'Глоссарий терминов',
      tracks: 'Четыре уровня от новичка до мейнтейнера',
    },
    intro: {
      basics: 'Если вы впервые слышите слова Git, репозиторий, ветка, для каждого понятия здесь: житейская аналогия, схема, как это применять и где люди обычно ошибаются.',
      start: 'Минимальный набор: Git, аккаунт GitHub, VS Code, доступ к репозиторию и понятный способ авторизации.',
      commands: 'Выберите этап работы, чтобы увидеть команды, смысл и типичные ситуации применения.',
      workflow: 'Нажимайте на этапы, чтобы увидеть, кто что делает и какие команды используются.',
      cases: 'Сборник живых ситуаций: проблема, безопасное решение и точные команды. Нажмите на карточку, чтобы развернуть.',
      strategies: 'GitHub даёт три способа слить PR (pull request). Выбор влияет на историю, revert и разбор проблем.',
      safety: 'Эти вещи занимают один вечер на настройку, но экономят недели на разборе проблем.',
      extensions: 'Это не обязательный набор, но он сильно упрощает PR (pull request), историю, CI и навигацию по проектам.',
      extWorkflow: 'Каждый этап Git-процесса — от первого clone до мержа PR (pull request) — покрывается конкретным расширением. Ниже показано, где именно каждое из них включается в работу.',
      flags: 'Команды Git принимают десятки флагов. Здесь собраны самые полезные — сгруппированы по командам, с пояснениями и примерами.',
      glossary: 'Чтобы не теряться в разговорах о "PR (pull request)", "upstream" и "detached HEAD". Начните вводить термин, чтобы отфильтровать.',
      tracks: 'Пошаговые упражнения. Не переходите на следующий уровень, пока не выполнили все из текущего — каждый базируется на предыдущем.',
    },
    setupCards: [
      ['Установить Git', 'Скачайте Git for Windows, оставьте стандартные настройки, затем проверьте командой git --version.'],
      ['Войти в GitHub', 'Создайте аккаунт, включите двухфакторную защиту и добавьте email, который будет использоваться в коммитах.'],
      ['Открыть VS Code', 'Установите расширения для GitHub и откройте папку проекта через File > Open Folder.'],
      ['Клонировать проект', 'Используйте git clone или команду VS Code Git: Clone, затем запустите проект по README.'],
    ],
    cmdSearchPh: 'Поиск по команде или пояснению…',
    cmdSearchAria: 'Поиск по командам',
    filterAria: 'Фильтр команд',
    stages: { all: 'Все', start: 'Старт', daily: 'Ежедневно', branch: 'Ветки', pr: 'Pull request', history: 'История', rescue: 'Спасение' },
    cmdMeans: 'Что значит:',
    cmdWhen: 'Когда использовать:',
    cmdCopy: 'Скопировать',
    cmdCopied: 'Скопировано',
    cmdCopyFail: 'Выделите вручную',
    cmdEmpty: 'Ничего не нашлось. Попробуйте другое слово или сбросьте фильтр.',
    caseTagsAria: 'Фильтр случаев',
    tagLabels: { all: 'Все', oops: 'Опечатки', team: 'Команда', security: 'Безопасность', history: 'История', release: 'Релиз' } as Record<string, string>,
    caseTagSingle: { oops: 'Опечатка', team: 'Команда', security: 'Безопасность', history: 'История', release: 'Релиз' } as Record<string, string>,
    caseProblem: 'Проблема.',
    caseSolution: 'Решение.',
    strategyWhen: 'Когда:',
    strategyPros: 'Плюсы',
    strategyCons: 'Минусы',
    glossarySearchPh: 'Найти термин…',
    glossarySearchAria: 'Поиск по глоссарию',
    glossaryEmpty: 'Ничего не нашлось.',
    conceptTagAnalogy: 'аналогия',
    conceptTagDetail: 'подробно',
    conceptTagPractice: 'на практике',
    conceptTagPitfall: 'частая ошибка',
    trackGoal: 'Цель.',
    footer: 'Практичный маршрут: сначала настройка, затем маленькие ветки, понятные коммиты, pull request, ревью и аккуратное слияние.',
    footerTop: 'Наверх',
    themeLabel: 'Тема',
    langLabel: 'Язык',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    sidenavAria: 'Навигация по разделам',
    sidenavTitle: 'Содержание',
    sidenavToggle: 'Меню разделов',
    enNotice: '',
  },
  en: {
    navAria: 'Main navigation',
    nav: { basics: 'Basics', start: 'Setup', commands: 'Commands', workflow: 'Workflow', cases: 'Cases', strategies: 'Merging', safety: 'Safety', extensions: 'Extensions', extWorkflow: 'Extensions in action', flags: 'Flags', glossary: 'Glossary', tracks: 'Tracks' },
    heroEyebrow: 'GitHub + VS Code for teams',
    heroTitle: 'A GitHub guide from zero to confident pull requests',
    heroLead: 'A step-by-step guide for an everyday user: install, Git commands, working in VS Code, real team processes, reviews, conflicts and useful extensions.',
    heroBtnStart: 'Start from scratch',
    heroBtnFlow: 'See the workflow',
    terminalAria: 'GitHub workflow visualization',
    eyebrows: { basics: '01 / basics', start: '02 / setup', commands: '03 / commands', workflow: '04 / teamwork', cases: '05 / from real life', strategies: '06 / merging a PR', safety: '07 / safety & hygiene', extensions: '08 / VS Code', extWorkflow: '09 / extensions in action', flags: '10 / command flags', glossary: '11 / glossary', tracks: '12 / leveling tracks' },
    h2: {
      basics: 'What is what: core concepts in plain words',
      start: 'What to set up before your first task',
      commands: 'Git commands in plain language',
      workflow: 'Real workflows in a single project',
      cases: 'Real situations that happen to everyone',
      strategies: 'Which merge strategy to pick',
      safety: 'What to enable in any repository',
      extensions: 'Extensions that help with GitHub',
      extWorkflow: 'How extensions fit into each workflow stage',
      flags: 'All Git command flags in one place',
      glossary: 'Glossary of terms',
      tracks: 'Four levels from beginner to maintainer',
    },
    intro: {
      basics: 'If you hear Git, repository, branch for the first time — each card has a real-life analogy, a diagram, how to use it in practice and where people typically slip.',
      start: 'The minimum kit: Git, a GitHub account, VS Code, repository access and a clear authentication method.',
      commands: 'Pick a stage of work to see the commands, what they mean and when to use them.',
      workflow: 'Click each step to see who does what and which commands are used.',
      cases: 'A collection of real situations: the problem, a safe solution and the exact commands. Click a card to expand it.',
      strategies: 'GitHub gives three ways to merge a PR. The choice affects history, reverts and incident analysis.',
      safety: 'These take an evening to set up but save weeks of incident analysis later.',
      extensions: 'Not strictly required, but they make PRs, history, CI and project navigation much easier.',
      extWorkflow: 'Every stage of the Git process — from initial clone to merging a PR — is covered by a specific extension. Below you can see where each one enters the workflow.',
      flags: 'Git commands accept dozens of flags. Here are the most useful ones — grouped by command, with explanations and examples.',
      glossary: 'So you don\u2019t get lost in talk about "PR", "upstream" and "detached HEAD". Start typing a term to filter.',
      tracks: 'Step-by-step exercises. Do not move to the next level until you finish the current one — each builds on the previous.',
    },
    setupCards: [
      ['Install Git', 'Download Git for Windows, keep the default settings, then verify with git --version.'],
      ['Sign in to GitHub', 'Create an account, enable two-factor auth and add the email you will use in commits.'],
      ['Open VS Code', 'Install the GitHub extensions and open the project folder via File > Open Folder.'],
      ['Clone the project', 'Use git clone or the VS Code command Git: Clone, then run the project per the README.'],
    ],
    cmdSearchPh: 'Search by command or description\u2026',
    cmdSearchAria: 'Search commands',
    filterAria: 'Command filter',
    stages: { all: 'All', start: 'Start', daily: 'Daily', branch: 'Branches', pr: 'Pull request', history: 'History', rescue: 'Rescue' },
    cmdMeans: 'Meaning:',
    cmdWhen: 'When to use:',
    cmdCopy: 'Copy',
    cmdCopied: 'Copied',
    cmdCopyFail: 'Select manually',
    cmdEmpty: 'Nothing found. Try another word or reset the filter.',
    caseTagsAria: 'Case filter',
    tagLabels: { all: 'All', oops: 'Typos', team: 'Team', security: 'Security', history: 'History', release: 'Release' } as Record<string, string>,
    caseTagSingle: { oops: 'Typo', team: 'Team', security: 'Security', history: 'History', release: 'Release' } as Record<string, string>,
    caseProblem: 'Problem.',
    caseSolution: 'Solution.',
    strategyWhen: 'When:',
    strategyPros: 'Pros',
    strategyCons: 'Cons',
    glossarySearchPh: 'Find a term\u2026',
    glossarySearchAria: 'Search glossary',
    glossaryEmpty: 'Nothing found.',
    conceptTagAnalogy: 'analogy',
    conceptTagDetail: 'in detail',
    conceptTagPractice: 'in practice',
    conceptTagPitfall: 'common mistake',
    trackGoal: 'Goal.',
    footer: 'A practical route: set up, then small branches, clear commits, pull requests, reviews and careful merges.',
    footerTop: 'Top',
    themeLabel: 'Theme',
    langLabel: 'Language',
    themeLight: 'Light',
    themeDark: 'Dark',
    sidenavAria: 'Section navigation',
    sidenavTitle: 'Contents',
    sidenavToggle: 'Sections menu',
    enNotice: '',
  },
} as const

const t = () => ui[lang]

type Command = {
  command: string
  meaning: string
  when: string
  tip: string
  stage: 'start' | 'daily' | 'branch' | 'pr' | 'history' | 'rescue'
}

type Case = {
  icon: string
  title: string
  problem: string
  solution: string
  commands: string[]
  tag: 'oops' | 'team' | 'security' | 'history' | 'release'
  viz: keyof typeof VIZ
}

type Concept = {
  id: string
  title: string
  short: string
  analogy: string
  detail: string
  practice: string
  pitfall: string
  viz: keyof typeof BASICS_VIZ
}

type TrackExercise = {
  title: string
  goal: string
  steps: string[]
  done: string
}

type Track = {
  id: string
  level: string
  emoji: string
  title: string
  intro: string
  exercises: TrackExercise[]
}

type Strategy = {
  name: string
  summary: string
  pros: string[]
  cons: string[]
  when: string
}

type GlossaryItem = { term: string; definition: string }

type WorkflowStep = {
  title: string
  role: string
  body: string
  commands: string[]
}

const commandsRu: Command[] = [
  {
    command: 'git --version',
    meaning: 'Проверяет, установлен ли Git и какую версию вы используете.',
    when: 'В самом начале настройки компьютера.',
    tip: 'Если команда не найдена, установите Git for Windows и перезапустите VS Code.',
    stage: 'start',
  },
  {
    command: 'git config --global user.name "Ivan Petrov"',
    meaning: 'Записывает имя автора, которое будет видно в коммитах.',
    when: 'Один раз на новом компьютере.',
    tip: 'Используйте реальное имя или рабочий ник, принятый в команде.',
    stage: 'start',
  },
  {
    command: 'git config --global user.email "ivan@example.com"',
    meaning: 'Записывает email автора коммитов.',
    when: 'Один раз вместе с user.name.',
    tip: 'Лучше взять email, который привязан к GitHub, чтобы коммиты отображались в профиле.',
    stage: 'start',
  },
  {
    command: 'git clone https://github.com/org/project.git',
    meaning: 'Скачивает удаленный репозиторий на ваш компьютер.',
    when: 'Когда вы впервые подключаетесь к проекту.',
    tip: 'В VS Code то же можно сделать через Command Palette: Git: Clone.',
    stage: 'start',
  },
  {
    command: 'git status',
    meaning: 'Показывает текущую ветку, измененные файлы и что уже подготовлено к коммиту.',
    when: 'Перед каждым коммитом, pull, merge или переключением веток.',
    tip: 'Это самая безопасная привычка в Git: сначала status, потом действие.',
    stage: 'daily',
  },
  {
    command: 'git pull --ff-only',
    meaning: 'Забирает свежие изменения из удаленной ветки без создания merge-коммита.',
    when: 'В начале рабочего дня и перед созданием новой ветки.',
    tip: 'Если fast-forward невозможен, Git остановится и даст разобраться, а не смешает историю автоматически.',
    stage: 'daily',
  },
  {
    command: 'git checkout -b feature/login-form',
    meaning: 'Создает новую ветку и сразу переключает вас на нее.',
    when: 'Перед началом отдельной задачи.',
    tip: 'Имя ветки делайте коротким: feature, fix, chore плюс суть задачи.',
    stage: 'branch',
  },
  {
    command: 'git add src/LoginForm.tsx',
    meaning: 'Добавляет выбранный файл в будущий коммит.',
    when: 'Когда часть изменений готова и ее надо зафиксировать.',
    tip: 'Не обязательно добавлять все сразу. Маленькие логичные коммиты легче ревьюить.',
    stage: 'daily',
  },
  {
    command: 'git commit -m "Add login form validation"',
    meaning: 'Создает снимок подготовленных изменений с понятным описанием.',
    when: 'Когда завершен маленький логичный шаг.',
    tip: 'Пишите сообщение так, будто объясняете коллеге, что изменилось.',
    stage: 'daily',
  },
  {
    command: 'git push -u origin feature/login-form',
    meaning: 'Отправляет ветку на GitHub и связывает локальную ветку с удаленной.',
    when: 'Перед открытием pull request или чтобы сохранить работу на GitHub.',
    tip: 'После первого push для этой ветки обычно достаточно git push.',
    stage: 'pr',
  },
  {
    command: 'gh pr create --fill --base main',
    meaning: 'Создает pull request через GitHub CLI, заполняя заголовок и описание из коммитов.',
    when: 'Когда задача готова к ревью.',
    tip: 'Если GitHub CLI не установлен, откройте PR (pull request) через сайт GitHub или расширение GitHub Pull Requests.',
    stage: 'pr',
  },
  {
    command: 'git fetch origin',
    meaning: 'Обновляет информацию о ветках на GitHub, не меняя ваши файлы.',
    when: 'Перед сравнением веток, rebase или checkout чужой ветки.',
    tip: 'Fetch безопаснее pull, когда вы хотите только посмотреть, что изменилось удаленно.',
    stage: 'daily',
  },
  {
    command: 'git rebase origin/main',
    meaning: 'Переносит ваши коммиты поверх свежего main.',
    when: 'Когда PR (pull request) отстал от основной ветки и команда использует линейную историю.',
    tip: 'Не делайте rebase опубликованной общей ветки без договоренности с командой.',
    stage: 'pr',
  },
  {
    command: 'git stash push -m "wip before hotfix"',
    meaning: 'Временно прячет незавершенные изменения.',
    when: 'Когда нужно срочно переключиться на другую задачу.',
    tip: 'После возврата используйте git stash pop, но сначала проверьте git status.',
    stage: 'rescue',
  },
  {
    command: 'git log --oneline --graph --decorate --all',
    meaning: 'Показывает компактную карту истории веток и коммитов.',
    when: 'Когда нужно понять, где находится ваша ветка относительно main.',
    tip: 'Если граф тяжело читать, поставьте Git Graph или GitLens в VS Code.',
    stage: 'history',
  },
  {
    command: 'git switch main',
    meaning: 'Современная и безопасная замена git checkout для смены ветки.',
    when: 'Каждый раз, когда нужно перейти на другую существующую ветку.',
    tip: 'git switch -c new-branch создаёт ветку и переключается на неё за один шаг.',
    stage: 'branch',
  },
  {
    command: 'git restore --staged file.ts',
    meaning: 'Убирает файл из подготовленных к коммиту, но оставляет изменения на диске.',
    when: 'Когда случайно сделали git add не того файла.',
    tip: 'git restore file.ts без --staged откатит изменения файла к последнему коммиту.',
    stage: 'daily',
  },
  {
    command: 'git diff --staged',
    meaning: 'Показывает, что именно попадёт в следующий коммит.',
    when: 'Перед каждым git commit, чтобы не закоммитить лишнее.',
    tip: 'В VS Code этот же diff видно во вкладке Source Control при клике по файлу.',
    stage: 'daily',
  },
  {
    command: 'git commit --amend --no-edit',
    meaning: 'Добавляет staged-изменения в последний коммит без правки сообщения.',
    when: 'Если забыли что-то положить в только что сделанный коммит.',
    tip: 'Не делайте amend для уже опубликованного коммита, если им пользуются другие.',
    stage: 'rescue',
  },
  {
    command: 'git cherry-pick a1b2c3d',
    meaning: 'Переносит один конкретный коммит из другой ветки в текущую.',
    when: 'Когда нужно перенести точечный фикс между релизными ветками.',
    tip: 'Если возник конфликт, решите его и используйте git cherry-pick --continue.',
    stage: 'rescue',
  },
  {
    command: 'git revert a1b2c3d',
    meaning: 'Создаёт новый коммит, отменяющий изменения указанного коммита.',
    when: 'Когда плохой коммит уже в main и переписывать историю нельзя.',
    tip: 'Безопасно для общих веток в отличие от git reset.',
    stage: 'rescue',
  },
  {
    command: 'git reset --soft HEAD~1',
    meaning: 'Откатывает последний коммит, сохраняя изменения в staged.',
    when: 'Когда нужно переписать сообщение или разделить коммит на несколько.',
    tip: '--mixed (по умолчанию) уберёт из staged, --hard сотрёт изменения. Будьте осторожны.',
    stage: 'rescue',
  },
  {
    command: 'git reflog',
    meaning: 'Показывает все перемещения HEAD: ветки, reset, rebase, checkout.',
    when: 'Когда кажется, что коммиты или ветка "исчезли".',
    tip: 'По хэшу из reflog можно вернуть почти любое состояние через git reset --hard <hash>.',
    stage: 'rescue',
  },
  {
    command: 'git bisect start && git bisect bad && git bisect good v1.0',
    meaning: 'Бинарным поиском находит коммит, в котором появился баг.',
    when: 'Когда баг точно был исправен в прошлой версии, но непонятно где сломался.',
    tip: 'Git сам подсунет нужные коммиты. После завершения вызовите git bisect reset.',
    stage: 'history',
  },
  {
    command: 'git blame src/api.ts',
    meaning: 'Показывает, кто и в каком коммите менял каждую строку файла.',
    when: 'Когда нужно понять причину строки кода.',
    tip: 'В VS Code GitLens показывает blame подсказкой прямо у строки.',
    stage: 'history',
  },
  {
    command: 'git tag -a v1.4.0 -m "Release 1.4.0" && git push origin v1.4.0',
    meaning: 'Создаёт аннотированный тег и публикует его на GitHub.',
    when: 'При выпуске релиза, чтобы зафиксировать конкретный коммит.',
    tip: 'GitHub Releases можно автоматически создавать из тегов через GitHub Actions.',
    stage: 'pr',
  },
  {
    command: 'git branch -d feature/login-form',
    meaning: 'Удаляет локальную ветку, если она уже слита.',
    when: 'После того как PR (pull request) вмержен и ветка больше не нужна.',
    tip: 'Используйте -D, чтобы удалить ветку, которая ещё не слита (осторожно).',
    stage: 'branch',
  },
  {
    command: 'git push origin --delete feature/login-form',
    meaning: 'Удаляет ветку из удалённого репозитория на GitHub.',
    when: 'После мержа PR (pull request), если auto-delete branches не настроен.',
    tip: 'Многие команды включают "Automatically delete head branches" в настройках репозитория.',
    stage: 'branch',
  },
  {
    command: 'git remote -v',
    meaning: 'Показывает, к каким удалённым репозиториям подключён ваш проект.',
    when: 'Когда работаете с форком и нужно проверить origin и upstream.',
    tip: 'git remote add upstream <url> подключает оригинальный репозиторий к вашему форку.',
    stage: 'start',
  },
  {
    command: 'git clean -fd',
    meaning: 'Удаляет неотслеживаемые файлы и пустые директории.',
    when: 'Когда после экспериментов в репозитории остался мусор.',
    tip: 'Сначала прогоните git clean -nd — это покажет, что будет удалено, без удаления.',
    stage: 'rescue',
  },
  {
    command: 'git stash pop',
    meaning: 'Возвращает изменения из последнего stash и удаляет его.',
    when: 'Когда вернулись к отложенной задаче после hotfix.',
    tip: 'Если есть несколько stash, используйте git stash list и git stash apply stash@{1}.',
    stage: 'rescue',
  },
  {
    command: 'git log -p src/auth.ts',
    meaning: 'Показывает историю файла со всеми diff-ами.',
    when: 'Когда нужно понять эволюцию конкретного файла.',
    tip: 'Добавьте --follow, чтобы Git отслеживал переименования файла.',
    stage: 'history',
  },
  {
    command: 'gh pr checkout 142',
    meaning: 'Скачивает чужой pull request в локальную ветку для проверки.',
    when: 'Когда нужно запустить PR (pull request) коллеги локально и протестировать.',
    tip: 'То же доступно в расширении GitHub Pull Requests одной кнопкой.',
    stage: 'pr',
  },
  {
    command: 'git config --global pull.rebase true',
    meaning: 'Делает rebase поведением по умолчанию для git pull.',
    when: 'Если в команде принята линейная история без merge-коммитов.',
    tip: 'Сочетайте с git config --global rebase.autoStash true для автоматического stash.',
    stage: 'start',
  },
  {
    command: 'git push --force-with-lease',
    meaning: 'Безопасный force-push: не перезапишет чужие коммиты на ветке.',
    when: 'После rebase или amend опубликованной ветки PR (pull request).',
    tip: 'Никогда не делайте обычный --force на общих ветках вроде main.',
    stage: 'pr',
  },
  {
    command: 'git fetch --prune',
    meaning: 'Забирает обновления с remote и удаляет устаревшие remote-tracking ветки, которых уже нет на GitHub.',
    when: 'Периодически, чтобы список веток не зарастал мусором от давно вмерженных PR (pull request).',
    tip: 'Настройте git config --global fetch.prune true — тогда prune будет происходить при каждом fetch/pull автоматически.',
    stage: 'daily',
  },
]

const workflowsRu: WorkflowStep[] = [
  {
    title: 'Новый участник подключается к проекту',
    role: 'Разработчик',
    body: 'Сначала ставит Git, входит в GitHub, клонирует проект, открывает папку в VS Code и запускает приложение по README. Цель — ничего не менять, пока проект не собирается локально.',
    commands: ['git --version', 'git clone https://github.com/company/shop.git', 'cd shop', 'npm install', 'npm run dev'],
  },
  {
    title: 'Работа над задачей из GitHub Projects',
    role: 'Разработчик',
    body: 'Берет карточку из колонки Ready, назначает себя, создает ветку от свежего main, делает маленькие коммиты и пушит ветку на GitHub.',
    commands: ['git checkout main', 'git pull --ff-only', 'git checkout -b feature/cart-empty-state', 'git add .', 'git commit -m "Add cart empty state"', 'git push -u origin feature/cart-empty-state'],
  },
  {
    title: 'Pull request и ревью',
    role: 'Автор PR (pull request) + ревьюер',
    body: 'Автор описывает контекст, прикладывает скриншоты, связывает issue. Ревьюер смотрит поведение, тесты и читаемость. Обсуждения ведутся в комментариях к конкретным строкам.',
    commands: ['gh pr create --fill --base main', 'gh pr view --web', 'git commit -m "Address review comments"', 'git push'],
  },
  {
    title: 'Конфликт при обновлении PR (pull request)',
    role: 'Автор PR (pull request)',
    body: 'Если main ушел вперед, автор подтягивает изменения, решает конфликт в VS Code Merge Editor, запускает проверки и снова отправляет ветку.',
    commands: ['git fetch origin', 'git rebase origin/main', 'git status', 'npm test', 'git push --force-with-lease'],
  },
  {
    title: 'Срочный hotfix в продакшене',
    role: 'Команда',
    body: 'Незавершенную работу прячут в stash, создают hotfix-ветку от main, делают минимальное исправление, быстро ревьюят и мержат после проверок.',
    commands: ['git stash push -m "wip before hotfix"', 'git checkout main', 'git pull --ff-only', 'git checkout -b hotfix/payment-timeout', 'git commit -m "Fix payment timeout handling"'],
  },  {
    title: 'Релиз версии с тегом',
    role: 'Release-менеджер',
    body: 'После прохождения всех PR (pull request) в main создают версионный тег, публикуют GitHub Release с описанием изменений, GitHub Actions собирает и выкладывает артефакт.',
    commands: ['git checkout main', 'git pull --ff-only', 'git tag -a v1.4.0 -m "Release 1.4.0"', 'git push origin v1.4.0', 'gh release create v1.4.0 --generate-notes'],
  },
  {
    title: 'Работа своим форком в open source',
    role: 'Внешний контрибьютор',
    body: 'Форкают репозиторий в свой аккаунт, подключают оригинал как upstream, регулярно синхронизируют main и отправляют PR (pull request) в оригинальный репозиторий.',
    commands: ['git clone https://github.com/me/lib.git', 'git remote add upstream https://github.com/original/lib.git', 'git fetch upstream', 'git rebase upstream/main', 'git push --force-with-lease'],
  },
  {
    title: 'Ревью с несколькими итерациями и fixup-коммитами',
    role: 'Автор PR (pull request)',
    body: 'Правки по ревью фиксируют отдельными fixup-коммитами, чтобы ревьюер видел разницу. Перед слиянием их склеивают autosquash-rebase в один аккуратный коммит.',
    commands: ['git commit --fixup HEAD', 'git push', 'git fetch origin', 'git rebase -i --autosquash origin/main', 'git push --force-with-lease'],
  },
  {
    title: 'Случайный коммит с секретом',
    role: 'Автор + DevOps',
    body: 'Если в репозиторий утёк токен, сначала заотзывают секрет у провайдера. Только потом чистят историю (git filter-repo / BFG), force-пушат и уведомляют команду.',
    commands: ['# 1. срочно отозвать токен в панели провайдера', 'git filter-repo --path .env --invert-paths', 'git push origin --force --all', 'git push origin --force --tags'],
  },]

const extensionsRu = [
  ['GitHub Pull Requests', 'Работа с PR (pull request) и issue прямо в VS Code: checkout PR (pull request), комментарии, ревью, статусы проверок.'],
  ['GitLens', 'История строк, авторы изменений, сравнение веток, навигация по коммитам.'],
  ['Git Graph', 'Наглядный граф веток, merge, rebase и история проекта.'],
  ['GitHub Actions', 'Просмотр workflow, логов CI и статусов сборок.'],
  ['GitHub Repositories', 'Открытие репозиториев без полного clone, удобно для чтения и быстрого просмотра.'],
  ['Project Manager', 'Быстрое переключение между несколькими локальными проектами.'],
  ['Conventional Commits', 'Подсказывает формат сообщений (feat, fix, chore) и упрощает автогенерацию changelog.'],
  ['Code Spell Checker', 'Ловит опечатки в коммитах, именах веток и PR (pull request)-описаниях.'],
]

type ExtWorkflowStep = {
  stage: string
  title: string
  extensions: { name: string; action: string }[]
  commands: string[]
}

const extWorkflowStepsRu: ExtWorkflowStep[] = [
  {
    stage: '01',
    title: 'Открываем проект',
    extensions: [
      { name: 'Project Manager', action: 'Переключение между локальными проектами — один клик в боковой панели.' },
      { name: 'GitHub Repositories', action: 'Можно открыть чужой репозиторий без clone, чтобы быстро посмотреть код.' },
    ],
    commands: ['git clone https://github.com/org/app.git', 'code app/'],
  },
  {
    stage: '02',
    title: 'Создаём ветку и пишем код',
    extensions: [
      { name: 'GitLens', action: 'Наведите на строку — увидите автора, дату и коммит последнего изменения (inline blame).' },
      { name: 'Git Graph', action: 'Откройте палитру → Git Graph: View Git Graph — визуально видно все ветки и мержи.' },
      { name: 'Code Spell Checker', action: 'Автоматически подчёркивает опечатки в коде, комментариях и именах веток.' },
    ],
    commands: ['git switch -c feature/payment', '# … пишем код …'],
  },
  {
    stage: '03',
    title: 'Коммитим изменения',
    extensions: [
      { name: 'Conventional Commits', action: 'Запускается из Command Palette: помогает выбрать тип (feat/fix/chore), scope и описание по шаблону.' },
      { name: 'Code Spell Checker', action: 'Проверяет текст сообщения коммита на опечатки перед отправкой.' },
      { name: 'GitLens', action: 'В боковой панели видно staged/unstaged файлы с подробным diff.' },
    ],
    commands: ['git add .', 'git commit -m "feat(payment): add Stripe integration"'],
  },
  {
    stage: '04',
    title: 'Пушим ветку и открываем PR (pull request)',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Создание PR (pull request) прямо из VS Code: заголовок, описание, ревьюеры, labels — всё в одном окне.' },
      { name: 'GitLens', action: 'Сравнение вашей ветки с main: видно все изменения перед открытием PR (pull request).' },
    ],
    commands: ['git push -u origin feature/payment', '# → VS Code: GitHub Pull Requests → Create Pull Request'],
  },
  {
    stage: '05',
    title: 'Ревью и обсуждение',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Checkout чужого PR (pull request) одной кнопкой, комментарии прямо в редакторе рядом с кодом.' },
      { name: 'GitLens', action: 'История файла и blame помогают понять контекст изменений при ревью.' },
      { name: 'Git Graph', action: 'Видно, от какого коммита main отвелась ветка и что изменилось с тех пор.' },
    ],
    commands: ['gh pr checkout 42', '# → оставляем комментарии → Approve / Request changes'],
  },
  {
    stage: '06',
    title: 'CI/CD проверки',
    extensions: [
      { name: 'GitHub Actions', action: 'Просмотр статусов workflow, логов конкретных шагов и re-run упавших сборок — не выходя из VS Code.' },
    ],
    commands: ['# CI запускается автоматически', 'gh run list --branch feature/payment', 'gh run view <id> --log-failed'],
  },
  {
    stage: '07',
    title: 'Мержим PR (pull request) и убираем ветку',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Кнопка Merge прямо в панели расширения — выбор стратегии (squash/rebase/merge commit).' },
      { name: 'Git Graph', action: 'После мержа видно, как коммиты влились в main — красивый визуальный граф.' },
      { name: 'GitLens', action: 'Interactive rebase перед мержем, если хотите причесать историю.' },
    ],
    commands: ['# → Merge PR → Delete branch', 'git fetch --prune', 'git switch main', 'git pull'],
  },
]

const extWorkflowStepsEn: ExtWorkflowStep[] = [
  {
    stage: '01',
    title: 'Open the project',
    extensions: [
      { name: 'Project Manager', action: 'Switch between local projects — one click in the sidebar.' },
      { name: 'GitHub Repositories', action: 'Open someone else\u2019s repo without cloning to quickly browse code.' },
    ],
    commands: ['git clone https://github.com/org/app.git', 'code app/'],
  },
  {
    stage: '02',
    title: 'Create a branch & write code',
    extensions: [
      { name: 'GitLens', action: 'Hover on a line to see the author, date and commit of the last change (inline blame).' },
      { name: 'Git Graph', action: 'Command Palette \u2192 Git Graph: View Git Graph \u2014 see all branches and merges visually.' },
      { name: 'Code Spell Checker', action: 'Automatically underlines typos in code, comments and branch names.' },
    ],
    commands: ['git switch -c feature/payment', '# \u2026 write code \u2026'],
  },
  {
    stage: '03',
    title: 'Commit changes',
    extensions: [
      { name: 'Conventional Commits', action: 'Launched from Command Palette: helps pick the type (feat/fix/chore), scope and description by template.' },
      { name: 'Code Spell Checker', action: 'Checks the commit message text for typos before sending.' },
      { name: 'GitLens', action: 'Sidebar shows staged/unstaged files with detailed diffs.' },
    ],
    commands: ['git add .', 'git commit -m "feat(payment): add Stripe integration"'],
  },
  {
    stage: '04',
    title: 'Push the branch & open a PR',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Create a PR right from VS Code: title, description, reviewers, labels \u2014 all in one window.' },
      { name: 'GitLens', action: 'Compare your branch with main: see all changes before opening the PR.' },
    ],
    commands: ['git push -u origin feature/payment', '# \u2192 VS Code: GitHub Pull Requests \u2192 Create Pull Request'],
  },
  {
    stage: '05',
    title: 'Review & discussion',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Checkout someone\u2019s PR (pull request) with one button, comment right in the editor next to the code.' },
      { name: 'GitLens', action: 'File history and blame help understand the context of changes during review.' },
      { name: 'Git Graph', action: 'See which main commit the branch forked from and what changed since.' },
    ],
    commands: ['gh pr checkout 42', '# \u2192 leave comments \u2192 Approve / Request changes'],
  },
  {
    stage: '06',
    title: 'CI/CD checks',
    extensions: [
      { name: 'GitHub Actions', action: 'View workflow statuses, logs of specific steps and re-run failed builds \u2014 without leaving VS Code.' },
    ],
    commands: ['# CI runs automatically', 'gh run list --branch feature/payment', 'gh run view <id> --log-failed'],
  },
  {
    stage: '07',
    title: 'Merge the PR (pull request) & clean up',
    extensions: [
      { name: 'GitHub Pull Requests', action: 'Merge button right in the extension panel \u2014 choose strategy (squash/rebase/merge commit).' },
      { name: 'Git Graph', action: 'After merging you see how commits flowed into main \u2014 a beautiful visual graph.' },
      { name: 'GitLens', action: 'Interactive rebase before merging if you want to tidy up the history.' },
    ],
    commands: ['# \u2192 Merge PR \u2192 Delete branch', 'git fetch --prune', 'git switch main', 'git pull'],
  },
]

type FlagGroup = {
  command: string
  flags: { flag: string; meaning: string; example: string }[]
}

const flagGroupsRu: FlagGroup[] = [
  {
    command: 'git clone',
    flags: [
      { flag: '--depth <n>', meaning: 'Shallow clone — скачать только последние n коммитов (ускоряет clone больших репо).', example: 'git clone --depth 1 https://github.com/org/app.git' },
      { flag: '--branch <name>', meaning: 'Сразу переключиться на указанную ветку/тег после клонирования.', example: 'git clone --branch develop https://github.com/org/app.git' },
      { flag: '--single-branch', meaning: 'Скачать историю только одной ветки (обычно вместе с --depth).', example: 'git clone --single-branch --branch main https://github.com/org/app.git' },
      { flag: '--recurse-submodules', meaning: 'Автоматически инициализировать и скачать все submodules.', example: 'git clone --recurse-submodules https://github.com/org/app.git' },
      { flag: '--bare', meaning: 'Клонировать только .git-данные без рабочей директории (для серверов/зеркал).', example: 'git clone --bare https://github.com/org/app.git' },
    ],
  },
  {
    command: 'git add',
    flags: [
      { flag: '-A / --all', meaning: 'Добавить все изменения: новые, изменённые и удалённые файлы.', example: 'git add -A' },
      { flag: '-p / --patch', meaning: 'Интерактивно выбирать куски (hunks) для добавления из каждого файла.', example: 'git add -p src/api.ts' },
      { flag: '-u / --update', meaning: 'Добавить только изменённые и удалённые файлы (не новые).', example: 'git add -u' },
      { flag: '-n / --dry-run', meaning: 'Показать, что будет добавлено, без реального добавления.', example: 'git add -n .' },
      { flag: '-f / --force', meaning: 'Добавить файл, даже если он в .gitignore.', example: 'git add -f dist/bundle.js' },
    ],
  },
  {
    command: 'git commit',
    flags: [
      { flag: '-m "msg"', meaning: 'Указать сообщение коммита прямо в командной строке.', example: 'git commit -m "feat: add payment module"' },
      { flag: '--amend', meaning: 'Переписать последний коммит (сообщение и/или файлы).', example: 'git commit --amend --no-edit' },
      { flag: '--no-edit', meaning: 'При --amend не открывать редактор, оставить старое сообщение.', example: 'git commit --amend --no-edit' },
      { flag: '-a / --all', meaning: 'Автоматически добавить все отслеживаемые изменённые файлы и закоммитить.', example: 'git commit -am "fix: typo in header"' },
      { flag: '--allow-empty', meaning: 'Создать коммит без изменений (полезно для триггера CI).', example: 'git commit --allow-empty -m "trigger deploy"' },
      { flag: '--fixup <hash>', meaning: 'Пометить коммит как fixup для последующего autosquash при rebase.', example: 'git commit --fixup abc1234' },
      { flag: '-s / --signoff', meaning: 'Добавить строку Signed-off-by (требуется в некоторых OSS-проектах).', example: 'git commit -s -m "docs: update README"' },
    ],
  },
  {
    command: 'git push',
    flags: [
      { flag: '-u / --set-upstream', meaning: 'Привязать локальную ветку к remote (при первом push).', example: 'git push -u origin feature/login' },
      { flag: '--force-with-lease', meaning: 'Безопасный force-push: откажет, если на remote есть чужие коммиты.', example: 'git push --force-with-lease' },
      { flag: '--force', meaning: 'Принудительно перезаписать remote-ветку (опасно на общих ветках!).', example: 'git push --force origin feature/test' },
      { flag: '--tags', meaning: 'Отправить все локальные теги на remote.', example: 'git push --tags' },
      { flag: '--delete', meaning: 'Удалить ветку на remote.', example: 'git push origin --delete feature/old' },
      { flag: '--no-verify', meaning: 'Пропустить pre-push хуки (осторожно!).', example: 'git push --no-verify' },
    ],
  },
  {
    command: 'git pull',
    flags: [
      { flag: '--rebase', meaning: 'Вместо merge сделать rebase локальных коммитов поверх remote.', example: 'git pull --rebase origin main' },
      { flag: '--no-rebase', meaning: 'Явно использовать merge (даже если в конфиге стоит rebase).', example: 'git pull --no-rebase' },
      { flag: '--autostash', meaning: 'Автоматически stash/unstash незакоммиченных изменений при pull.', example: 'git pull --rebase --autostash' },
      { flag: '--ff-only', meaning: 'Откажет, если fast-forward невозможен (защита от неожиданных мержей).', example: 'git pull --ff-only' },
    ],
  },
  {
    command: 'git fetch',
    flags: [
      { flag: '--prune', meaning: 'Удалить remote-tracking ветки, которых больше нет на сервере.', example: 'git fetch --prune' },
      { flag: '--all', meaning: 'Забрать изменения со всех remote (не только origin).', example: 'git fetch --all' },
      { flag: '--tags', meaning: 'Скачать все теги с remote.', example: 'git fetch --tags' },
      { flag: '--depth <n>', meaning: 'Ограничить глубину скачиваемой истории.', example: 'git fetch --depth 10 origin main' },
    ],
  },
  {
    command: 'git branch',
    flags: [
      { flag: '-a / --all', meaning: 'Показать все ветки: локальные + remote-tracking.', example: 'git branch -a' },
      { flag: '-d / --delete', meaning: 'Удалить ветку (только если она уже слита).', example: 'git branch -d feature/done' },
      { flag: '-D', meaning: 'Принудительно удалить ветку (даже неслитую).', example: 'git branch -D experiment/broken' },
      { flag: '-m / --move', meaning: 'Переименовать ветку.', example: 'git branch -m old-name new-name' },
      { flag: '-r / --remotes', meaning: 'Показать только remote-tracking ветки.', example: 'git branch -r' },
      { flag: '-v / --verbose', meaning: 'Показать последний коммит каждой ветки.', example: 'git branch -v' },
      { flag: '--merged', meaning: 'Показать ветки, которые уже слиты в текущую.', example: 'git branch --merged main' },
      { flag: '--no-merged', meaning: 'Показать ветки, которые ещё НЕ слиты.', example: 'git branch --no-merged main' },
    ],
  },
  {
    command: 'git log',
    flags: [
      { flag: '--oneline', meaning: 'Компактный вывод: один коммит = одна строка.', example: 'git log --oneline -20' },
      { flag: '--graph', meaning: 'Добавить ASCII-граф веток и мержей.', example: 'git log --oneline --graph --all' },
      { flag: '--all', meaning: 'Показать коммиты всех веток, не только текущей.', example: 'git log --all --oneline' },
      { flag: '-n <число>', meaning: 'Ограничить количество выводимых коммитов.', example: 'git log -5' },
      { flag: '-p / --patch', meaning: 'Показать diff каждого коммита.', example: 'git log -p src/api.ts' },
      { flag: '--stat', meaning: 'Показать статистику изменений (файлы, +/- строки).', example: 'git log --stat -10' },
      { flag: '--author="name"', meaning: 'Фильтр по автору.', example: 'git log --author="Ivan"' },
      { flag: '--since / --until', meaning: 'Фильтр по дате.', example: 'git log --since="2024-01-01" --until="2024-02-01"' },
      { flag: '--follow', meaning: 'Отслеживать переименования файла.', example: 'git log --follow src/utils.ts' },
      { flag: '--grep="text"', meaning: 'Фильтр по тексту в сообщении коммита.', example: 'git log --grep="fix" --oneline' },
    ],
  },
  {
    command: 'git diff',
    flags: [
      { flag: '--staged / --cached', meaning: 'Показать diff только для staged (добавленных в индекс) файлов.', example: 'git diff --staged' },
      { flag: '--stat', meaning: 'Краткая статистика: какие файлы изменены.', example: 'git diff --stat main..feature' },
      { flag: '--name-only', meaning: 'Только имена изменённых файлов (без содержимого).', example: 'git diff --name-only HEAD~3' },
      { flag: '--word-diff', meaning: 'Подсветить изменения на уровне слов, а не строк.', example: 'git diff --word-diff' },
      { flag: '--no-color', meaning: 'Отключить цветовую подсветку (для скриптов/пайпов).', example: 'git diff --no-color > changes.patch' },
    ],
  },
  {
    command: 'git stash',
    flags: [
      { flag: 'push -m "msg"', meaning: 'Сохранить изменения с понятным именем.', example: 'git stash push -m "WIP: login form"' },
      { flag: '--include-untracked / -u', meaning: 'Включить в stash неотслеживаемые (новые) файлы.', example: 'git stash -u' },
      { flag: '--keep-index', meaning: 'Оставить staged-файлы на месте, stash-ить только unstaged.', example: 'git stash --keep-index' },
      { flag: 'pop', meaning: 'Применить последний stash и удалить его из списка.', example: 'git stash pop' },
      { flag: 'apply stash@{n}', meaning: 'Применить конкретный stash, не удаляя его.', example: 'git stash apply stash@{2}' },
      { flag: 'list', meaning: 'Показать все сохранённые stash-записи.', example: 'git stash list' },
      { flag: 'drop stash@{n}', meaning: 'Удалить конкретный stash.', example: 'git stash drop stash@{0}' },
    ],
  },
  {
    command: 'git reset',
    flags: [
      { flag: '--soft <ref>', meaning: 'Откатить HEAD, но оставить изменения в staged (индексе).', example: 'git reset --soft HEAD~1' },
      { flag: '--mixed <ref>', meaning: 'Откатить HEAD и unstage файлы (по умолчанию).', example: 'git reset HEAD~1' },
      { flag: '--hard <ref>', meaning: 'Откатить HEAD, индекс И рабочую директорию (уничтожает изменения!).', example: 'git reset --hard origin/main' },
    ],
  },
  {
    command: 'git rebase',
    flags: [
      { flag: '-i / --interactive', meaning: 'Интерактивный rebase: pick, squash, reword, drop коммитов.', example: 'git rebase -i HEAD~5' },
      { flag: '--onto <base>', meaning: 'Переместить ветку на другую базу.', example: 'git rebase --onto main feature/old feature/new' },
      { flag: '--autosquash', meaning: 'Автоматически расположить fixup/squash-коммиты к их целям.', example: 'git rebase -i --autosquash origin/main' },
      { flag: '--abort', meaning: 'Прервать rebase и вернуть ветку в исходное состояние.', example: 'git rebase --abort' },
      { flag: '--continue', meaning: 'Продолжить rebase после разрешения конфликта.', example: 'git rebase --continue' },
      { flag: '--skip', meaning: 'Пропустить текущий конфликтный коммит при rebase.', example: 'git rebase --skip' },
    ],
  },
  {
    command: 'git merge',
    flags: [
      { flag: '--no-ff', meaning: 'Всегда создавать merge-коммит (даже если fast-forward возможен).', example: 'git merge --no-ff feature/login' },
      { flag: '--ff-only', meaning: 'Мержить только если возможен fast-forward (иначе отказ).', example: 'git merge --ff-only origin/main' },
      { flag: '--squash', meaning: 'Склеить все коммиты ветки в один, без создания merge-коммита.', example: 'git merge --squash feature/refactor' },
      { flag: '--abort', meaning: 'Прервать конфликтный merge и вернуть состояние.', example: 'git merge --abort' },
      { flag: '--no-edit', meaning: 'Не открывать редактор для сообщения merge-коммита.', example: 'git merge --no-ff --no-edit feature/x' },
    ],
  },
  {
    command: 'git checkout / switch',
    flags: [
      { flag: '-b <name> (checkout)', meaning: 'Создать новую ветку и переключиться на неё.', example: 'git checkout -b feature/new' },
      { flag: '-c <name> (switch)', meaning: 'Создать новую ветку и переключиться (современный синтаксис).', example: 'git switch -c feature/new' },
      { flag: '--detach', meaning: 'Переключиться на коммит/тег в detached HEAD (без ветки).', example: 'git switch --detach v2.0.0' },
      { flag: '-- <file>', meaning: 'Восстановить файл из последнего коммита (отмена изменений).', example: 'git checkout -- src/broken.ts' },
    ],
  },
  {
    command: 'git tag',
    flags: [
      { flag: '-a <name>', meaning: 'Создать аннотированный тег (с автором, датой, сообщением).', example: 'git tag -a v1.0.0 -m "Release 1.0"' },
      { flag: '-m "msg"', meaning: 'Сообщение для аннотированного тега.', example: 'git tag -a v2.1.0 -m "Hotfix release"' },
      { flag: '-d <name>', meaning: 'Удалить локальный тег.', example: 'git tag -d v1.0.0-beta' },
      { flag: '-l / --list', meaning: 'Список тегов (поддерживает glob-паттерны).', example: 'git tag -l "v2.*"' },
    ],
  },
  {
    command: 'git remote',
    flags: [
      { flag: '-v / --verbose', meaning: 'Показать URL для fetch и push каждого remote.', example: 'git remote -v' },
      { flag: 'add <name> <url>', meaning: 'Добавить новый remote.', example: 'git remote add upstream https://github.com/original/repo.git' },
      { flag: 'remove <name>', meaning: 'Удалить remote.', example: 'git remote remove old-origin' },
      { flag: 'set-url <name> <url>', meaning: 'Изменить URL существующего remote.', example: 'git remote set-url origin git@github.com:me/app.git' },
      { flag: 'rename <old> <new>', meaning: 'Переименовать remote.', example: 'git remote rename origin github' },
    ],
  },
  {
    command: 'git clean',
    flags: [
      { flag: '-f / --force', meaning: 'Обязательный флаг — без него clean не удалит файлы.', example: 'git clean -f' },
      { flag: '-d', meaning: 'Удалить также пустые неотслеживаемые директории.', example: 'git clean -fd' },
      { flag: '-n / --dry-run', meaning: 'Показать, что будет удалено, без удаления.', example: 'git clean -nd' },
      { flag: '-x', meaning: 'Удалить даже файлы из .gitignore (node_modules, dist и т.д.).', example: 'git clean -fdx' },
      { flag: '-X', meaning: 'Удалить ТОЛЬКО файлы из .gitignore.', example: 'git clean -fX' },
    ],
  },
  {
    command: 'git config',
    flags: [
      { flag: '--global', meaning: 'Записать настройку для всех репозиториев текущего пользователя.', example: 'git config --global user.name "Ivan"' },
      { flag: '--local', meaning: 'Записать настройку только для текущего репозитория.', example: 'git config --local core.autocrlf input' },
      { flag: '--system', meaning: 'Записать настройку для всех пользователей системы.', example: 'git config --system core.longpaths true' },
      { flag: '--list', meaning: 'Показать все текущие настройки.', example: 'git config --global --list' },
      { flag: '--unset', meaning: 'Удалить конкретную настройку.', example: 'git config --global --unset core.editor' },
    ],
  },
]

const flagGroupsEn: FlagGroup[] = [
  {
    command: 'git clone',
    flags: [
      { flag: '--depth <n>', meaning: 'Shallow clone \u2014 download only the last n commits (speeds up cloning large repos).', example: 'git clone --depth 1 https://github.com/org/app.git' },
      { flag: '--branch <name>', meaning: 'Immediately check out the specified branch/tag after cloning.', example: 'git clone --branch develop https://github.com/org/app.git' },
      { flag: '--single-branch', meaning: 'Download history of only one branch (usually paired with --depth).', example: 'git clone --single-branch --branch main https://github.com/org/app.git' },
      { flag: '--recurse-submodules', meaning: 'Automatically initialize and download all submodules.', example: 'git clone --recurse-submodules https://github.com/org/app.git' },
      { flag: '--bare', meaning: 'Clone only the .git data without a working directory (for servers/mirrors).', example: 'git clone --bare https://github.com/org/app.git' },
    ],
  },
  {
    command: 'git add',
    flags: [
      { flag: '-A / --all', meaning: 'Stage all changes: new, modified and deleted files.', example: 'git add -A' },
      { flag: '-p / --patch', meaning: 'Interactively select hunks from each file to stage.', example: 'git add -p src/api.ts' },
      { flag: '-u / --update', meaning: 'Stage only modified and deleted files (not new ones).', example: 'git add -u' },
      { flag: '-n / --dry-run', meaning: 'Show what would be staged without actually staging.', example: 'git add -n .' },
      { flag: '-f / --force', meaning: 'Stage a file even if it is in .gitignore.', example: 'git add -f dist/bundle.js' },
    ],
  },
  {
    command: 'git commit',
    flags: [
      { flag: '-m "msg"', meaning: 'Specify the commit message inline.', example: 'git commit -m "feat: add payment module"' },
      { flag: '--amend', meaning: 'Rewrite the last commit (message and/or files).', example: 'git commit --amend --no-edit' },
      { flag: '--no-edit', meaning: 'With --amend, keep the old message without opening the editor.', example: 'git commit --amend --no-edit' },
      { flag: '-a / --all', meaning: 'Automatically stage all tracked modified files and commit.', example: 'git commit -am "fix: typo in header"' },
      { flag: '--allow-empty', meaning: 'Create a commit with no changes (useful to trigger CI).', example: 'git commit --allow-empty -m "trigger deploy"' },
      { flag: '--fixup <hash>', meaning: 'Mark a commit as a fixup for later autosquash during rebase.', example: 'git commit --fixup abc1234' },
      { flag: '-s / --signoff', meaning: 'Add a Signed-off-by line (required by some OSS projects).', example: 'git commit -s -m "docs: update README"' },
    ],
  },
  {
    command: 'git push',
    flags: [
      { flag: '-u / --set-upstream', meaning: 'Link the local branch to a remote branch (on first push).', example: 'git push -u origin feature/login' },
      { flag: '--force-with-lease', meaning: 'Safe force-push: refuses if there are unknown commits on the remote.', example: 'git push --force-with-lease' },
      { flag: '--force', meaning: 'Forcefully overwrite the remote branch (dangerous on shared branches!).', example: 'git push --force origin feature/test' },
      { flag: '--tags', meaning: 'Push all local tags to the remote.', example: 'git push --tags' },
      { flag: '--delete', meaning: 'Delete a branch on the remote.', example: 'git push origin --delete feature/old' },
      { flag: '--no-verify', meaning: 'Skip pre-push hooks (use with caution!).', example: 'git push --no-verify' },
    ],
  },
  {
    command: 'git pull',
    flags: [
      { flag: '--rebase', meaning: 'Rebase local commits on top of the remote instead of merging.', example: 'git pull --rebase origin main' },
      { flag: '--no-rebase', meaning: 'Explicitly use merge (even if config says rebase).', example: 'git pull --no-rebase' },
      { flag: '--autostash', meaning: 'Automatically stash/unstash uncommitted changes during pull.', example: 'git pull --rebase --autostash' },
      { flag: '--ff-only', meaning: 'Refuse if fast-forward is not possible (protects against unexpected merges).', example: 'git pull --ff-only' },
    ],
  },
  {
    command: 'git fetch',
    flags: [
      { flag: '--prune', meaning: 'Remove remote-tracking branches that no longer exist on the server.', example: 'git fetch --prune' },
      { flag: '--all', meaning: 'Fetch changes from all remotes (not just origin).', example: 'git fetch --all' },
      { flag: '--tags', meaning: 'Download all tags from the remote.', example: 'git fetch --tags' },
      { flag: '--depth <n>', meaning: 'Limit the depth of fetched history.', example: 'git fetch --depth 10 origin main' },
    ],
  },
  {
    command: 'git branch',
    flags: [
      { flag: '-a / --all', meaning: 'Show all branches: local + remote-tracking.', example: 'git branch -a' },
      { flag: '-d / --delete', meaning: 'Delete a branch (only if already merged).', example: 'git branch -d feature/done' },
      { flag: '-D', meaning: 'Force-delete a branch (even if not merged).', example: 'git branch -D experiment/broken' },
      { flag: '-m / --move', meaning: 'Rename a branch.', example: 'git branch -m old-name new-name' },
      { flag: '-r / --remotes', meaning: 'Show only remote-tracking branches.', example: 'git branch -r' },
      { flag: '-v / --verbose', meaning: 'Show the last commit of each branch.', example: 'git branch -v' },
      { flag: '--merged', meaning: 'Show branches already merged into the current one.', example: 'git branch --merged main' },
      { flag: '--no-merged', meaning: 'Show branches NOT yet merged.', example: 'git branch --no-merged main' },
    ],
  },
  {
    command: 'git log',
    flags: [
      { flag: '--oneline', meaning: 'Compact output: one commit = one line.', example: 'git log --oneline -20' },
      { flag: '--graph', meaning: 'Add an ASCII branch/merge graph.', example: 'git log --oneline --graph --all' },
      { flag: '--all', meaning: 'Show commits from all branches, not just the current one.', example: 'git log --all --oneline' },
      { flag: '-n <number>', meaning: 'Limit the number of commits shown.', example: 'git log -5' },
      { flag: '-p / --patch', meaning: 'Show the diff of each commit.', example: 'git log -p src/api.ts' },
      { flag: '--stat', meaning: 'Show change statistics (files, +/- lines).', example: 'git log --stat -10' },
      { flag: '--author="name"', meaning: 'Filter by author.', example: 'git log --author="Ivan"' },
      { flag: '--since / --until', meaning: 'Filter by date.', example: 'git log --since="2024-01-01" --until="2024-02-01"' },
      { flag: '--follow', meaning: 'Track file renames.', example: 'git log --follow src/utils.ts' },
      { flag: '--grep="text"', meaning: 'Filter by text in the commit message.', example: 'git log --grep="fix" --oneline' },
    ],
  },
  {
    command: 'git diff',
    flags: [
      { flag: '--staged / --cached', meaning: 'Show diff only for staged (indexed) files.', example: 'git diff --staged' },
      { flag: '--stat', meaning: 'Brief statistics: which files changed.', example: 'git diff --stat main..feature' },
      { flag: '--name-only', meaning: 'Only names of changed files (no content).', example: 'git diff --name-only HEAD~3' },
      { flag: '--word-diff', meaning: 'Highlight changes at the word level, not line level.', example: 'git diff --word-diff' },
      { flag: '--no-color', meaning: 'Disable color output (for scripts/pipes).', example: 'git diff --no-color > changes.patch' },
    ],
  },
  {
    command: 'git stash',
    flags: [
      { flag: 'push -m "msg"', meaning: 'Save changes with a descriptive name.', example: 'git stash push -m "WIP: login form"' },
      { flag: '--include-untracked / -u', meaning: 'Include untracked (new) files in the stash.', example: 'git stash -u' },
      { flag: '--keep-index', meaning: 'Keep staged files in place, only stash unstaged.', example: 'git stash --keep-index' },
      { flag: 'pop', meaning: 'Apply the last stash and remove it from the list.', example: 'git stash pop' },
      { flag: 'apply stash@{n}', meaning: 'Apply a specific stash without removing it.', example: 'git stash apply stash@{2}' },
      { flag: 'list', meaning: 'Show all saved stash entries.', example: 'git stash list' },
      { flag: 'drop stash@{n}', meaning: 'Delete a specific stash.', example: 'git stash drop stash@{0}' },
    ],
  },
  {
    command: 'git reset',
    flags: [
      { flag: '--soft <ref>', meaning: 'Move HEAD back but keep changes staged.', example: 'git reset --soft HEAD~1' },
      { flag: '--mixed <ref>', meaning: 'Move HEAD back and unstage files (default).', example: 'git reset HEAD~1' },
      { flag: '--hard <ref>', meaning: 'Move HEAD back, reset index AND working directory (destroys changes!).', example: 'git reset --hard origin/main' },
    ],
  },
  {
    command: 'git rebase',
    flags: [
      { flag: '-i / --interactive', meaning: 'Interactive rebase: pick, squash, reword, drop commits.', example: 'git rebase -i HEAD~5' },
      { flag: '--onto <base>', meaning: 'Move a branch onto a different base.', example: 'git rebase --onto main feature/old feature/new' },
      { flag: '--autosquash', meaning: 'Automatically place fixup/squash commits next to their targets.', example: 'git rebase -i --autosquash origin/main' },
      { flag: '--abort', meaning: 'Abort the rebase and restore the branch to its original state.', example: 'git rebase --abort' },
      { flag: '--continue', meaning: 'Continue the rebase after resolving a conflict.', example: 'git rebase --continue' },
      { flag: '--skip', meaning: 'Skip the current conflicting commit during rebase.', example: 'git rebase --skip' },
    ],
  },
  {
    command: 'git merge',
    flags: [
      { flag: '--no-ff', meaning: 'Always create a merge commit (even if fast-forward is possible).', example: 'git merge --no-ff feature/login' },
      { flag: '--ff-only', meaning: 'Merge only if fast-forward is possible (otherwise refuse).', example: 'git merge --ff-only origin/main' },
      { flag: '--squash', meaning: 'Squash all branch commits into one, without creating a merge commit.', example: 'git merge --squash feature/refactor' },
      { flag: '--abort', meaning: 'Abort a conflicting merge and restore the state.', example: 'git merge --abort' },
      { flag: '--no-edit', meaning: 'Don\u2019t open the editor for the merge commit message.', example: 'git merge --no-ff --no-edit feature/x' },
    ],
  },
  {
    command: 'git checkout / switch',
    flags: [
      { flag: '-b <name> (checkout)', meaning: 'Create a new branch and switch to it.', example: 'git checkout -b feature/new' },
      { flag: '-c <name> (switch)', meaning: 'Create a new branch and switch (modern syntax).', example: 'git switch -c feature/new' },
      { flag: '--detach', meaning: 'Switch to a commit/tag in detached HEAD mode (no branch).', example: 'git switch --detach v2.0.0' },
      { flag: '-- <file>', meaning: 'Restore a file from the last commit (discard changes).', example: 'git checkout -- src/broken.ts' },
    ],
  },
  {
    command: 'git tag',
    flags: [
      { flag: '-a <name>', meaning: 'Create an annotated tag (with author, date, message).', example: 'git tag -a v1.0.0 -m "Release 1.0"' },
      { flag: '-m "msg"', meaning: 'Message for the annotated tag.', example: 'git tag -a v2.1.0 -m "Hotfix release"' },
      { flag: '-d <name>', meaning: 'Delete a local tag.', example: 'git tag -d v1.0.0-beta' },
      { flag: '-l / --list', meaning: 'List tags (supports glob patterns).', example: 'git tag -l "v2.*"' },
    ],
  },
  {
    command: 'git remote',
    flags: [
      { flag: '-v / --verbose', meaning: 'Show fetch and push URLs for each remote.', example: 'git remote -v' },
      { flag: 'add <name> <url>', meaning: 'Add a new remote.', example: 'git remote add upstream https://github.com/original/repo.git' },
      { flag: 'remove <name>', meaning: 'Remove a remote.', example: 'git remote remove old-origin' },
      { flag: 'set-url <name> <url>', meaning: 'Change the URL of an existing remote.', example: 'git remote set-url origin git@github.com:me/app.git' },
      { flag: 'rename <old> <new>', meaning: 'Rename a remote.', example: 'git remote rename origin github' },
    ],
  },
  {
    command: 'git clean',
    flags: [
      { flag: '-f / --force', meaning: 'Required flag \u2014 without it clean won\u2019t delete files.', example: 'git clean -f' },
      { flag: '-d', meaning: 'Also delete empty untracked directories.', example: 'git clean -fd' },
      { flag: '-n / --dry-run', meaning: 'Show what would be deleted without deleting.', example: 'git clean -nd' },
      { flag: '-x', meaning: 'Delete even files from .gitignore (node_modules, dist, etc.).', example: 'git clean -fdx' },
      { flag: '-X', meaning: 'Delete ONLY files matching .gitignore.', example: 'git clean -fX' },
    ],
  },
  {
    command: 'git config',
    flags: [
      { flag: '--global', meaning: 'Write the setting for all repos of the current user.', example: 'git config --global user.name "Ivan"' },
      { flag: '--local', meaning: 'Write the setting only for the current repository.', example: 'git config --local core.autocrlf input' },
      { flag: '--system', meaning: 'Write the setting for all users on the system.', example: 'git config --system core.longpaths true' },
      { flag: '--list', meaning: 'Show all current settings.', example: 'git config --global --list' },
      { flag: '--unset', meaning: 'Remove a specific setting.', example: 'git config --global --unset core.editor' },
    ],
  },
]

const VIZ = {
  'secret-leak': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="18" y="22" width="84" height="66" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="60" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">.env</text>
    <text x="60" y="64" text-anchor="middle" font-size="9" fill="#586575">API_KEY=•••</text>
    <text x="60" y="78" text-anchor="middle" font-size="9" fill="#586575">TOKEN=•••</text>
    <circle cx="100" cy="22" r="11" fill="#d8513b"/>
    <text x="100" y="27" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">!</text>
    <path d="M112 55 L196 55" stroke="#d8513b" stroke-width="2" stroke-dasharray="5 4"/>
    <polygon points="194,49 206,55 194,61" fill="#d8513b"/>
    <text x="154" y="48" text-anchor="middle" font-size="10" fill="#d8513b" font-weight="700">push</text>
    <rect x="216" y="22" width="84" height="66" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="258" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">GitHub</text>
    <text x="258" y="62" text-anchor="middle" font-size="9" fill="#586575">filter-repo</text>
    <text x="258" y="76" text-anchor="middle" font-size="9" fill="#586575">+ revoke key</text>
  </svg>`,

  'wrong-branch': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="34" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="50" y1="30" x2="300" y2="30" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="80" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="130" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="190" cy="30" r="8" fill="#fff" stroke="#d8513b" stroke-width="2.5"/>
    <text x="190" y="18" text-anchor="middle" font-size="9" fill="#d8513b" font-weight="700">не туда!</text>
    <path d="M190 38 Q 215 60 235 80" stroke="#d8513b" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
    <polygon points="232,75 240,82 230,84" fill="#d8513b"/>
    <text x="248" y="65" font-size="10" fill="#586575">switch -c</text>
    <text x="8" y="86" font-size="10" fill="#4a90e2" font-weight="800">feature</text>
    <line x1="60" y1="82" x2="300" y2="82" stroke="#4a90e2" stroke-width="3"/>
    <circle cx="240" cy="82" r="7" fill="#4a90e2"/>
  </svg>`,

  'rebase-broken': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="22" font-size="10" fill="#586575" font-weight="700">после rebase</text>
    <line x1="20" y1="42" x2="300" y2="42" stroke="#cdd5dd" stroke-width="3"/>
    <g>
      <circle cx="60" cy="42" r="7" fill="#fff" stroke="#d8513b" stroke-width="2"/>
      <text x="60" y="46" text-anchor="middle" font-size="10" fill="#d8513b" font-weight="900">×</text>
      <circle cx="120" cy="42" r="7" fill="#fff" stroke="#d8513b" stroke-width="2"/>
      <text x="120" y="46" text-anchor="middle" font-size="10" fill="#d8513b" font-weight="900">?</text>
      <circle cx="180" cy="42" r="7" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    </g>
    <path d="M195 60 Q 220 78 250 90" stroke="#1e8a6b" stroke-width="2" fill="none"/>
    <polygon points="247,86 254,92 246,94" fill="#1e8a6b"/>
    <text x="200" y="74" font-size="10" fill="#1e8a6b" font-weight="700">reflog</text>
    <text x="8" y="98" font-size="10" fill="#1e8a6b" font-weight="700">HEAD@{5}</text>
    <circle cx="270" cy="92" r="8" fill="#1e8a6b"/>
    <text x="270" y="96" text-anchor="middle" font-size="10" fill="#fff" font-weight="900">✓</text>
  </svg>`,

  'deleted-branch': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="34" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="50" y1="32" x2="300" y2="32" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="90" cy="32" r="6" fill="#1e8a6b"/>
    <circle cx="170" cy="32" r="6" fill="#1e8a6b"/>
    <circle cx="250" cy="32" r="6" fill="#1e8a6b"/>
    <text x="8" y="86" font-size="10" fill="#4a90e2" font-weight="800">feature</text>
    <line x1="60" y1="82" x2="170" y2="82" stroke="#4a90e2" stroke-width="3" stroke-dasharray="3 4" opacity="0.5"/>
    <circle cx="100" cy="82" r="6" fill="#fff" stroke="#4a90e2" stroke-width="2" opacity="0.5"/>
    <circle cx="150" cy="82" r="7" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="150" y="86" text-anchor="middle" font-size="10" fill="#d8513b" font-weight="900">×</text>
    <text x="150" y="100" text-anchor="middle" font-size="9" fill="#d8513b">deleted</text>
    <path d="M170 78 Q 220 70 260 78" stroke="#1e8a6b" stroke-width="2" fill="none"/>
    <polygon points="257,74 264,80 256,82" fill="#1e8a6b"/>
    <text x="200" y="64" text-anchor="middle" font-size="10" fill="#1e8a6b" font-weight="700">git branch a1b2c3d</text>
  </svg>`,

  'wrong-file': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="22" width="100" height="68" rx="8" fill="#fff" stroke="#cdd5dd" stroke-width="2"/>
    <text x="64" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#16202a">commit</text>
    <text x="64" y="58" text-anchor="middle" font-size="9" fill="#1e8a6b">+ src/api.ts</text>
    <text x="64" y="74" text-anchor="middle" font-size="9" fill="#d8513b">+ build.zip ×</text>
    <path d="M124 56 L186 56" stroke="#586575" stroke-width="2"/>
    <polygon points="184,51 194,56 184,61" fill="#586575"/>
    <text x="155" y="48" text-anchor="middle" font-size="10" fill="#586575" font-weight="700">amend</text>
    <rect x="204" y="22" width="100" height="68" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="254" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">commit'</text>
    <text x="254" y="58" text-anchor="middle" font-size="9" fill="#1e8a6b">+ src/api.ts</text>
    <text x="254" y="74" text-anchor="middle" font-size="9" fill="#586575">+ .gitignore</text>
  </svg>`,

  'force-push': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="22" font-size="10" fill="#586575" font-weight="700">origin/feature</text>
    <line x1="20" y1="42" x2="300" y2="42" stroke="#d8513b" stroke-width="3"/>
    <circle cx="60" cy="42" r="6" fill="#d8513b"/>
    <circle cx="120" cy="42" r="6" fill="#d8513b"/>
    <circle cx="200" cy="42" r="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="200" y="28" text-anchor="middle" font-size="9" fill="#d8513b" font-weight="700">force-push</text>
    <text x="8" y="78" font-size="10" fill="#4a90e2" font-weight="700">локально</text>
    <line x1="20" y1="92" x2="300" y2="92" stroke="#4a90e2" stroke-width="3"/>
    <circle cx="60" cy="92" r="6" fill="#4a90e2"/>
    <circle cx="120" cy="92" r="6" fill="#4a90e2"/>
    <circle cx="170" cy="92" r="6" fill="#4a90e2"/>
    <circle cx="220" cy="92" r="6" fill="#4a90e2"/>
    <text x="195" y="106" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">cherry-pick →</text>
  </svg>`,

  'big-pr': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="14" width="120" height="86" rx="8" fill="#fdecea" stroke="#d8513b" stroke-width="2"/>
    <text x="74" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">PR #42</text>
    <text x="74" y="56" text-anchor="middle" font-size="9" fill="#586575">300 файлов</text>
    <text x="74" y="74" text-anchor="middle" font-size="9" fill="#586575">+4218 / -1820</text>
    <text x="74" y="92" text-anchor="middle" font-size="9" fill="#d8513b" font-weight="700">никто не ревьюит</text>
    <path d="M140 55 L172 55" stroke="#586575" stroke-width="2"/>
    <polygon points="170,50 180,55 170,60" fill="#586575"/>
    <rect x="186" y="14" width="116" height="22" rx="5" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="1.5"/>
    <text x="244" y="29" text-anchor="middle" font-size="10" font-weight="700" fill="#1e8a6b">PR · refactor</text>
    <rect x="186" y="44" width="116" height="22" rx="5" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="1.5"/>
    <text x="244" y="59" text-anchor="middle" font-size="10" font-weight="700" fill="#1e8a6b">PR · feature</text>
    <rect x="186" y="74" width="116" height="22" rx="5" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="1.5"/>
    <text x="244" y="89" text-anchor="middle" font-size="10" font-weight="700" fill="#1e8a6b">PR · tests</text>
  </svg>`,

  'lfs': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="18" width="80" height="76" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="60" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">hero.psd</text>
    <text x="60" y="58" text-anchor="middle" font-size="9" fill="#586575">240 МБ</text>
    <rect x="32" y="68" width="56" height="8" rx="2" fill="#d8513b" opacity="0.3"/>
    <rect x="32" y="78" width="48" height="8" rx="2" fill="#d8513b" opacity="0.3"/>
    <path d="M108 56 L196 56" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="194,51 204,56 194,61" fill="#1e8a6b"/>
    <text x="152" y="48" text-anchor="middle" font-size="10" fill="#1e8a6b" font-weight="800">git lfs</text>
    <rect x="212" y="34" width="88" height="44" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="256" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">pointer</text>
    <text x="256" y="68" text-anchor="middle" font-size="9" fill="#586575">130 байт</text>
  </svg>`,

  'bisect': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="20" y1="55" x2="300" y2="55" stroke="#cdd5dd" stroke-width="3"/>
    <circle cx="40" cy="55" r="7" fill="#1e8a6b"/>
    <circle cx="80" cy="55" r="7" fill="#1e8a6b"/>
    <circle cx="120" cy="55" r="7" fill="#1e8a6b"/>
    <circle cx="160" cy="55" r="9" fill="#fff" stroke="#586575" stroke-width="2"/>
    <text x="160" y="59" text-anchor="middle" font-size="10" font-weight="900" fill="#586575">?</text>
    <circle cx="200" cy="55" r="7" fill="#d8513b"/>
    <circle cx="240" cy="55" r="7" fill="#d8513b"/>
    <circle cx="280" cy="55" r="7" fill="#d8513b"/>
    <text x="40" y="38" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">good</text>
    <text x="280" y="38" text-anchor="middle" font-size="9" fill="#d8513b" font-weight="700">bad</text>
    <path d="M40 78 L160 78" stroke="#1e8a6b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <path d="M160 78 L280 78" stroke="#d8513b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="160" y="98" text-anchor="middle" font-size="10" fill="#586575" font-weight="700">git bisect → ½ → ¼ → ⅛</text>
  </svg>`,

  'rollback': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="20" y1="55" x2="300" y2="55" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="60" cy="55" r="7" fill="#1e8a6b"/>
    <text x="60" y="38" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="800">v1.3.0</text>
    <circle cx="160" cy="55" r="9" fill="#fff" stroke="#d8513b" stroke-width="2.5"/>
    <text x="160" y="38" text-anchor="middle" font-size="9" fill="#d8513b" font-weight="800">v1.4.0</text>
    <text x="160" y="76" text-anchor="middle" font-size="9" fill="#d8513b">сломан</text>
    <circle cx="260" cy="55" r="7" fill="#1e8a6b"/>
    <text x="260" y="38" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="800">v1.4.1</text>
    <path d="M250 70 Q 200 100 165 75" stroke="#1e8a6b" stroke-width="2" fill="none"/>
    <polygon points="168,72 162,78 161,68" fill="#1e8a6b"/>
    <text x="220" y="98" text-anchor="middle" font-size="10" fill="#1e8a6b" font-weight="700">revert -m 1</text>
  </svg>`,

  'wrong-author': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="18" width="120" height="76" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <circle cx="48" cy="44" r="12" fill="#fdecea"/>
    <text x="48" y="48" text-anchor="middle" font-size="11" font-weight="900" fill="#d8513b">×</text>
    <text x="80" y="42" font-size="10" font-weight="700" fill="#d8513b">personal@</text>
    <text x="80" y="56" font-size="9" fill="#586575">gmail.com</text>
    <text x="32" y="80" font-size="9" fill="#586575">commit «Add API»</text>
    <path d="M148 56 L182 56" stroke="#586575" stroke-width="2"/>
    <polygon points="180,51 190,56 180,61" fill="#586575"/>
    <rect x="198" y="18" width="116" height="76" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <circle cx="226" cy="44" r="12" fill="#1e8a6b"/>
    <text x="226" y="48" text-anchor="middle" font-size="11" font-weight="900" fill="#fff">✓</text>
    <text x="256" y="42" font-size="10" font-weight="700" fill="#1e8a6b">work@</text>
    <text x="256" y="56" font-size="9" fill="#586575">company.com</text>
    <text x="210" y="80" font-size="9" fill="#586575">commit --amend</text>
  </svg>`,

  'ci-mismatch': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="18" width="120" height="76" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="80" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">локально</text>
    <circle cx="80" cy="60" r="14" fill="#1e8a6b"/>
    <text x="80" y="65" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">✓</text>
    <text x="80" y="86" text-anchor="middle" font-size="9" fill="#586575">node 20.10</text>
    <rect x="180" y="18" width="120" height="76" rx="8" fill="#fdecea" stroke="#d8513b" stroke-width="2"/>
    <text x="240" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">CI</text>
    <circle cx="240" cy="60" r="14" fill="#d8513b"/>
    <text x="240" y="65" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">×</text>
    <text x="240" y="86" text-anchor="middle" font-size="9" fill="#586575">node 18.19</text>
    <text x="160" y="62" text-anchor="middle" font-size="14" fill="#586575" font-weight="900">≠</text>
  </svg>`,

  'ssh': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="30" width="130" height="50" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="79" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">https://</text>
    <text x="79" y="68" text-anchor="middle" font-size="9" fill="#586575">пароль каждый раз</text>
    <path d="M152 55 L180 55" stroke="#586575" stroke-width="2"/>
    <polygon points="178,50 188,55 178,60" fill="#586575"/>
    <rect x="194" y="30" width="112" height="50" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="250" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">git@github</text>
    <text x="250" y="68" text-anchor="middle" font-size="9" fill="#586575">ed25519 ключ</text>
    <text x="160" y="98" text-anchor="middle" font-size="9" fill="#586575">git remote set-url origin …</text>
  </svg>`,

  'rewrite': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="14" width="120" height="86" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="74" y="32" text-anchor="middle" font-size="10" font-weight="800" fill="#d8513b">до</text>
    <text x="22" y="50" font-size="9" fill="#586575">• fix</text>
    <text x="22" y="64" font-size="9" fill="#586575">• asdf</text>
    <text x="22" y="78" font-size="9" fill="#586575">• ещё фикс</text>
    <text x="22" y="92" font-size="9" fill="#586575">• типа норм</text>
    <path d="M140 55 L182 55" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="180,50 190,55 180,60" fill="#1e8a6b"/>
    <text x="161" y="48" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">rebase -i</text>
    <rect x="196" y="14" width="110" height="86" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="251" y="32" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">после</text>
    <text x="204" y="50" font-size="9" fill="#1e8a6b" font-weight="600">• feat: api v2</text>
    <text x="204" y="64" font-size="9" fill="#1e8a6b" font-weight="600">• test: api v2</text>
    <text x="204" y="78" font-size="9" fill="#1e8a6b" font-weight="600">• docs: README</text>
  </svg>`,

  'crlf': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="22" width="120" height="66" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="74" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">Windows</text>
    <text x="74" y="60" text-anchor="middle" font-size="10" fill="#586575" font-family="monospace">line\\r\\n</text>
    <text x="74" y="78" text-anchor="middle" font-size="9" fill="#d8513b">CRLF</text>
    <path d="M142 55 L182 55" stroke="#586575" stroke-width="2"/>
    <polygon points="180,50 190,55 180,60" fill="#586575"/>
    <text x="161" y="48" text-anchor="middle" font-size="9" fill="#586575" font-weight="700">eol=lf</text>
    <rect x="196" y="22" width="110" height="66" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="251" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">репозиторий</text>
    <text x="251" y="60" text-anchor="middle" font-size="10" fill="#586575" font-family="monospace">line\\n</text>
    <text x="251" y="78" text-anchor="middle" font-size="9" fill="#1e8a6b">LF</text>
  </svg>`,

  'submodule': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="18" width="130" height="76" rx="8" fill="#fff" stroke="#cdd5dd" stroke-width="2"/>
    <text x="79" y="36" text-anchor="middle" font-size="10" font-weight="800" fill="#16202a">repo/</text>
    <rect x="32" y="46" width="96" height="36" rx="6" fill="#fdecea" stroke="#d8513b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="80" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#d8513b">vendor/lib/</text>
    <text x="80" y="76" text-anchor="middle" font-size="9" fill="#d8513b">пусто ?</text>
    <path d="M152 55 L182 55" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="180,50 190,55 180,60" fill="#1e8a6b"/>
    <text x="161" y="48" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">--init</text>
    <rect x="196" y="18" width="110" height="76" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="251" y="36" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">repo/</text>
    <rect x="208" y="46" width="86" height="36" rx="6" fill="#fff" stroke="#1e8a6b" stroke-width="1.5"/>
    <text x="251" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#1e8a6b">vendor/lib/</text>
    <text x="251" y="76" text-anchor="middle" font-size="9" fill="#586575">@ a1b2c3d</text>
  </svg>`,

  'prune': `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="20" font-size="10" fill="#586575" font-weight="700">git branch -r</text>
    <rect x="14" y="28" width="130" height="72" rx="8" fill="#fdecea" stroke="#d8513b" stroke-width="1.5"/>
    <text x="26" y="46" font-size="9" fill="#d8513b">origin/feature-a</text>
    <text x="26" y="60" font-size="9" fill="#d8513b">origin/feature-b</text>
    <text x="26" y="74" font-size="9" fill="#d8513b">origin/fix-typo</text>
    <text x="26" y="88" font-size="9" fill="#586575">origin/main</text>
    <text x="110" y="44" font-size="9" fill="#d8513b" font-weight="700">✗</text>
    <text x="110" y="58" font-size="9" fill="#d8513b" font-weight="700">✗</text>
    <text x="110" y="72" font-size="9" fill="#d8513b" font-weight="700">✗</text>
    <path d="M152 64 L182 64" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="180,59 190,64 180,69" fill="#1e8a6b"/>
    <text x="166" y="56" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">prune</text>
    <rect x="196" y="28" width="110" height="72" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="208" y="46" font-size="9" fill="#1e8a6b" font-weight="600">origin/main</text>
    <text x="208" y="62" font-size="9" fill="#586575">чисто ✓</text>
  </svg>`,
} as const

// ============================================================================
// STRATEGY_VIZ — branch graph SVGs for each merge strategy
// ============================================================================

const STRATEGY_VIZ = [
  // 0: Merge commit
  `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="16" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="40" y1="30" x2="320" y2="30" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="60" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="120" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="280" cy="30" r="9" fill="#fff" stroke="#1e8a6b" stroke-width="2.5"/>
    <text x="280" y="34" text-anchor="middle" font-size="8" font-weight="900" fill="#1e8a6b">M</text>
    <text x="280" y="16" text-anchor="middle" font-size="8" fill="#1e8a6b">merge commit</text>
    <text x="8" y="76" font-size="10" fill="#4a90e2" font-weight="800">feature</text>
    <line x1="120" y1="80" x2="250" y2="80" stroke="#4a90e2" stroke-width="2.5"/>
    <circle cx="150" cy="80" r="5" fill="#4a90e2"/>
    <text x="150" y="100" text-anchor="middle" font-size="8" fill="#586575">A</text>
    <circle cx="190" cy="80" r="5" fill="#4a90e2"/>
    <text x="190" y="100" text-anchor="middle" font-size="8" fill="#586575">B</text>
    <circle cx="230" cy="80" r="5" fill="#4a90e2"/>
    <text x="230" y="100" text-anchor="middle" font-size="8" fill="#586575">C</text>
    <path d="M120 30 Q 125 55 150 80" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
    <path d="M230 80 Q 260 55 280 30" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
  </svg>`,

  // 1: Squash and merge
  `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="16" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="40" y1="30" x2="320" y2="30" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="60" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="120" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="240" cy="30" r="8" fill="#1e8a6b"/>
    <text x="240" y="16" text-anchor="middle" font-size="8" fill="#1e8a6b" font-weight="700">A+B+C</text>
    <text x="8" y="76" font-size="10" fill="#4a90e2" font-weight="800">feature</text>
    <line x1="120" y1="80" x2="250" y2="80" stroke="#4a90e2" stroke-width="2" stroke-dasharray="4 3" opacity="0.5"/>
    <circle cx="150" cy="80" r="5" fill="#4a90e2" opacity="0.4"/>
    <text x="150" y="100" text-anchor="middle" font-size="8" fill="#586575" opacity="0.5">A</text>
    <circle cx="190" cy="80" r="5" fill="#4a90e2" opacity="0.4"/>
    <text x="190" y="100" text-anchor="middle" font-size="8" fill="#586575" opacity="0.5">B</text>
    <circle cx="230" cy="80" r="5" fill="#4a90e2" opacity="0.4"/>
    <text x="230" y="100" text-anchor="middle" font-size="8" fill="#586575" opacity="0.5">C</text>
    <path d="M120 30 Q 125 55 150 80" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="4 3" opacity="0.4"/>
    <path d="M190 80 Q 220 50 240 30" stroke="#1e8a6b" stroke-width="2" fill="none"/>
    <polygon points="237,34 243,28 245,38" fill="#1e8a6b"/>
    <text x="230" y="58" font-size="8" fill="#1e8a6b" font-weight="700">squash</text>
  </svg>`,

  // 2: Rebase and merge
  `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="8" y="16" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="40" y1="30" x2="320" y2="30" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="60" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="120" cy="30" r="6" fill="#1e8a6b"/>
    <circle cx="180" cy="30" r="6" fill="#4a90e2"/>
    <text x="180" y="16" text-anchor="middle" font-size="8" fill="#4a90e2" font-weight="700">A'</text>
    <circle cx="230" cy="30" r="6" fill="#4a90e2"/>
    <text x="230" y="16" text-anchor="middle" font-size="8" fill="#4a90e2" font-weight="700">B'</text>
    <circle cx="280" cy="30" r="6" fill="#4a90e2"/>
    <text x="280" y="16" text-anchor="middle" font-size="8" fill="#4a90e2" font-weight="700">C'</text>
    <text x="8" y="76" font-size="10" fill="#cdd5dd" font-weight="800">feature</text>
    <line x1="120" y1="80" x2="250" y2="80" stroke="#cdd5dd" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="150" cy="80" r="5" fill="#cdd5dd"/>
    <text x="150" y="100" text-anchor="middle" font-size="8" fill="#cdd5dd">A</text>
    <circle cx="190" cy="80" r="5" fill="#cdd5dd"/>
    <text x="190" y="100" text-anchor="middle" font-size="8" fill="#cdd5dd">B</text>
    <circle cx="230" cy="80" r="5" fill="#cdd5dd"/>
    <text x="230" y="100" text-anchor="middle" font-size="8" fill="#cdd5dd">C</text>
    <path d="M150 75 L180 35" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
    <path d="M190 75 L230 35" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
    <path d="M230 75 L280 35" stroke="#4a90e2" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
    <text x="290" y="106" font-size="8" fill="#586575" font-weight="700">линейная история</text>
  </svg>`,
]

// ============================================================================
// BASICS — концепт-карточки для новичков
// ============================================================================

const BASICS_VIZ = {
  'git-vs-github': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="30" width="140" height="110" rx="10" fill="#fff" stroke="#1e8a6b" stroke-width="2"/>
    <text x="84" y="52" text-anchor="middle" font-size="13" font-weight="800" fill="#1e8a6b">Ваш компьютер</text>
    <rect x="34" y="64" width="100" height="20" rx="5" fill="#f0f8f5"/>
    <text x="84" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#1e8a6b">Git (движок)</text>
    <text x="84" y="100" text-anchor="middle" font-size="9" fill="#586575">отслеживает версии</text>
    <text x="84" y="114" text-anchor="middle" font-size="9" fill="#586575">работает офлайн</text>
    <text x="84" y="128" text-anchor="middle" font-size="9" fill="#586575">консольная программа</text>

    <path d="M158 78 L210 78" stroke="#586575" stroke-width="2"/>
    <polygon points="208,73 218,78 208,83" fill="#586575"/>
    <path d="M218 100 L162 100" stroke="#586575" stroke-width="2"/>
    <polygon points="164,95 154,100 164,105" fill="#586575"/>
    <text x="186" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="#586575">push</text>
    <text x="186" y="116" text-anchor="middle" font-size="10" font-weight="700" fill="#586575">pull</text>

    <rect x="222" y="20" width="124" height="120" rx="10" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="284" y="42" text-anchor="middle" font-size="13" font-weight="800" fill="#1e8a6b">GitHub</text>
    <text x="284" y="56" text-anchor="middle" font-size="9" fill="#586575">облачный сайт</text>
    <circle cx="248" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="284" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="320" cy="80" r="8" fill="#1e8a6b"/>
    <text x="284" y="106" text-anchor="middle" font-size="9" fill="#586575">общая копия</text>
    <text x="284" y="120" text-anchor="middle" font-size="9" fill="#586575">для всей команды</text>
    <text x="284" y="134" text-anchor="middle" font-size="9" fill="#586575">+ PR, issues, CI</text>
  </svg>`,

  'repository': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M30 40 L30 130 L200 130 L200 50 L120 50 L110 40 Z" fill="#fff" stroke="#1e8a6b" stroke-width="2"/>
    <text x="115" y="74" text-anchor="middle" font-size="12" font-weight="800" fill="#1e8a6b">my-project/</text>
    <text x="50" y="92" font-size="10" fill="#586575">📄 src/</text>
    <text x="50" y="106" font-size="10" fill="#586575">📄 README.md</text>
    <text x="50" y="120" font-size="10" fill="#1e8a6b" font-weight="700">📓 .git/ ← дневник</text>

    <line x1="220" y1="80" x2="340" y2="80" stroke="#cdd5dd" stroke-width="2"/>
    <circle cx="232" cy="80" r="6" fill="#1e8a6b"/>
    <text x="232" y="64" text-anchor="middle" font-size="9" fill="#586575">v1</text>
    <circle cx="262" cy="80" r="6" fill="#1e8a6b"/>
    <text x="262" y="64" text-anchor="middle" font-size="9" fill="#586575">v2</text>
    <circle cx="292" cy="80" r="6" fill="#1e8a6b"/>
    <text x="292" y="64" text-anchor="middle" font-size="9" fill="#586575">v3</text>
    <circle cx="322" cy="80" r="8" fill="#1e8a6b"/>
    <text x="322" y="62" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="800">сейчас</text>
    <text x="280" y="110" text-anchor="middle" font-size="10" fill="#586575" font-weight="700">история всех изменений</text>
    <text x="280" y="124" text-anchor="middle" font-size="9" fill="#586575">в любую можно вернуться</text>
  </svg>`,

  'commit': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="180" y="22" text-anchor="middle" font-size="11" fill="#586575">«фотография проекта в момент времени»</text>
    <rect x="20" y="40" width="100" height="100" rx="8" fill="#fff" stroke="#1e8a6b" stroke-width="2"/>
    <text x="70" y="62" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">commit a1b2c3</text>
    <line x1="32" y1="72" x2="108" y2="72" stroke="#cdd5dd"/>
    <text x="30" y="88" font-size="9" fill="#586575">📄 api.ts</text>
    <text x="30" y="102" font-size="9" fill="#586575">📄 user.ts</text>
    <text x="30" y="116" font-size="9" fill="#586575">📄 README</text>
    <text x="70" y="134" text-anchor="middle" font-size="8" fill="#586575">10:23, Иван</text>

    <rect x="138" y="40" width="100" height="100" rx="8" fill="#fff" stroke="#1e8a6b" stroke-width="2"/>
    <text x="188" y="62" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">commit d4e5f6</text>
    <line x1="150" y1="72" x2="226" y2="72" stroke="#cdd5dd"/>
    <text x="148" y="88" font-size="9" fill="#586575">📄 api.ts ✎</text>
    <text x="148" y="102" font-size="9" fill="#586575">📄 user.ts</text>
    <text x="148" y="116" font-size="9" fill="#1e8a6b">📄 login.ts +</text>
    <text x="188" y="134" text-anchor="middle" font-size="8" fill="#586575">11:05, Иван</text>

    <rect x="256" y="40" width="100" height="100" rx="8" fill="#fff" stroke="#1e8a6b" stroke-width="2"/>
    <text x="306" y="62" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">commit 7g8h9i</text>
    <line x1="268" y1="72" x2="344" y2="72" stroke="#cdd5dd"/>
    <text x="266" y="88" font-size="9" fill="#586575">📄 api.ts</text>
    <text x="266" y="102" font-size="9" fill="#586575">📄 user.ts ✎</text>
    <text x="266" y="116" font-size="9" fill="#586575">📄 login.ts</text>
    <text x="306" y="134" text-anchor="middle" font-size="8" fill="#586575">14:40, Аня</text>
  </svg>`,

  'branch': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="10" y="36" font-size="11" fill="#1e8a6b" font-weight="800">main</text>
    <line x1="50" y1="32" x2="340" y2="32" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="70" cy="32" r="7" fill="#1e8a6b"/>
    <circle cx="120" cy="32" r="7" fill="#1e8a6b"/>
    <circle cx="280" cy="32" r="7" fill="#1e8a6b"/>
    <circle cx="320" cy="32" r="9" fill="#fff" stroke="#1e8a6b" stroke-width="2.5"/>
    <text x="320" y="18" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">merge</text>

    <path d="M120 32 Q 150 60 180 80" stroke="#4a90e2" stroke-width="3" fill="none"/>
    <line x1="180" y1="80" x2="290" y2="80" stroke="#4a90e2" stroke-width="3"/>
    <path d="M290 80 Q 310 60 320 32" stroke="#4a90e2" stroke-width="3" fill="none"/>
    <text x="10" y="86" font-size="11" fill="#4a90e2" font-weight="800">feature</text>
    <circle cx="200" cy="80" r="7" fill="#4a90e2"/>
    <circle cx="240" cy="80" r="7" fill="#4a90e2"/>
    <circle cx="280" cy="80" r="7" fill="#4a90e2"/>

    <path d="M70 32 Q 100 110 140 130" stroke="#d8513b" stroke-width="3" fill="none" stroke-dasharray="4 4"/>
    <line x1="140" y1="130" x2="260" y2="130" stroke="#d8513b" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="10" y="136" font-size="11" fill="#d8513b" font-weight="800">эксперимент</text>
    <circle cx="160" cy="130" r="6" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <circle cx="220" cy="130" r="6" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="270" y="135" font-size="9" fill="#d8513b">не зашло — выкинули</text>
  </svg>`,

  'head': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="180" y="22" text-anchor="middle" font-size="11" fill="#586575">«закладка в книге истории»</text>
    <line x1="30" y1="80" x2="330" y2="80" stroke="#cdd5dd" stroke-width="3"/>
    <circle cx="60" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="120" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="180" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="240" cy="80" r="8" fill="#1e8a6b"/>
    <circle cx="300" cy="80" r="10" fill="#1e8a6b"/>
    <text x="60" y="104" text-anchor="middle" font-size="9" fill="#586575">a1b2</text>
    <text x="120" y="104" text-anchor="middle" font-size="9" fill="#586575">c3d4</text>
    <text x="180" y="104" text-anchor="middle" font-size="9" fill="#586575">e5f6</text>
    <text x="240" y="104" text-anchor="middle" font-size="9" fill="#586575">g7h8</text>
    <text x="300" y="104" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="800">i9j0</text>
    <path d="M300 50 L300 65" stroke="#d8513b" stroke-width="2.5"/>
    <polygon points="295,63 305,63 300,72" fill="#d8513b"/>
    <text x="300" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#d8513b">HEAD</text>
    <text x="180" y="138" text-anchor="middle" font-size="10" fill="#586575">указывает на коммит, который сейчас открыт в файлах</text>
  </svg>`,

  'remote': `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="40" width="90" height="80" rx="8" fill="#fff" stroke="#4a90e2" stroke-width="2"/>
    <text x="65" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#4a90e2">Иван</text>
    <text x="65" y="78" text-anchor="middle" font-size="9" fill="#586575">локально</text>
    <circle cx="44" cy="96" r="5" fill="#4a90e2"/>
    <circle cx="64" cy="96" r="5" fill="#4a90e2"/>
    <circle cx="84" cy="96" r="5" fill="#4a90e2"/>

    <rect x="135" y="20" width="90" height="120" rx="10" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2.5"/>
    <text x="180" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">origin</text>
    <text x="180" y="56" text-anchor="middle" font-size="9" fill="#586575">(GitHub)</text>
    <circle cx="160" cy="78" r="6" fill="#1e8a6b"/>
    <circle cx="180" cy="78" r="6" fill="#1e8a6b"/>
    <circle cx="200" cy="78" r="6" fill="#1e8a6b"/>
    <circle cx="160" cy="100" r="6" fill="#1e8a6b"/>
    <circle cx="180" cy="100" r="6" fill="#1e8a6b"/>
    <text x="180" y="124" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">главная копия</text>

    <rect x="250" y="40" width="90" height="80" rx="8" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="295" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">Аня</text>
    <text x="295" y="78" text-anchor="middle" font-size="9" fill="#586575">локально</text>
    <circle cx="274" cy="96" r="5" fill="#d8513b"/>
    <circle cx="294" cy="96" r="5" fill="#d8513b"/>

    <line x1="112" y1="80" x2="133" y2="80" stroke="#586575" stroke-width="1.5"/>
    <line x1="227" y1="80" x2="248" y2="80" stroke="#586575" stroke-width="1.5"/>
  </svg>`,

  'clone-fetch-pull-push': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="60" width="100" height="60" rx="8" fill="#fff" stroke="#4a90e2" stroke-width="2"/>
    <text x="64" y="86" text-anchor="middle" font-size="11" font-weight="800" fill="#4a90e2">локально</text>
    <text x="64" y="102" text-anchor="middle" font-size="9" fill="#586575">.git/</text>
    <rect x="246" y="60" width="100" height="60" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="296" y="86" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">origin</text>
    <text x="296" y="102" text-anchor="middle" font-size="9" fill="#586575">GitHub</text>

    <path d="M240 22 L120 22" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="124,17 114,22 124,27" fill="#1e8a6b"/>
    <text x="180" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">clone</text>
    <text x="180" y="38" text-anchor="middle" font-size="8" fill="#586575">скачать первый раз</text>

    <path d="M240 60 L120 60" stroke="#586575" stroke-width="2" stroke-dasharray="3 3"/>
    <polygon points="124,55 114,60 124,65" fill="#586575"/>
    <text x="180" y="56" text-anchor="middle" font-size="10" font-weight="800" fill="#586575">fetch</text>

    <path d="M240 88 L120 88" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="124,83 114,88 124,93" fill="#1e8a6b"/>
    <text x="180" y="84" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">pull</text>
    <text x="180" y="100" text-anchor="middle" font-size="8" fill="#586575">забрать изменения</text>

    <path d="M120 130 L240 130" stroke="#d8513b" stroke-width="2"/>
    <polygon points="236,125 246,130 236,135" fill="#d8513b"/>
    <text x="180" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="#d8513b">push</text>
    <text x="180" y="146" text-anchor="middle" font-size="8" fill="#586575">отправить свои коммиты</text>
  </svg>`,

  'merge-vs-rebase': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="90" y="18" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">merge</text>
    <line x1="20" y1="44" x2="160" y2="44" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="40" cy="44" r="6" fill="#1e8a6b"/>
    <circle cx="80" cy="44" r="6" fill="#1e8a6b"/>
    <circle cx="150" cy="44" r="8" fill="#fff" stroke="#1e8a6b" stroke-width="2.5"/>
    <text x="150" y="34" text-anchor="middle" font-size="8" fill="#1e8a6b" font-weight="700">M</text>
    <path d="M80 44 Q 100 64 110 76" stroke="#4a90e2" stroke-width="3" fill="none"/>
    <line x1="110" y1="76" x2="140" y2="76" stroke="#4a90e2" stroke-width="3"/>
    <path d="M140 76 Q 150 64 150 44" stroke="#4a90e2" stroke-width="3" fill="none"/>
    <circle cx="120" cy="76" r="6" fill="#4a90e2"/>
    <circle cx="140" cy="76" r="6" fill="#4a90e2"/>
    <text x="90" y="100" text-anchor="middle" font-size="9" fill="#586575">сохраняет</text>
    <text x="90" y="114" text-anchor="middle" font-size="9" fill="#586575">историю как было</text>
    <text x="90" y="128" text-anchor="middle" font-size="9" fill="#586575">+ merge-коммит</text>

    <line x1="180" y1="80" x2="180" y2="160" stroke="#cdd5dd" stroke-width="1.5" stroke-dasharray="3 3"/>

    <text x="280" y="18" text-anchor="middle" font-size="11" font-weight="800" fill="#d8513b">rebase</text>
    <line x1="200" y1="44" x2="345" y2="44" stroke="#1e8a6b" stroke-width="3"/>
    <circle cx="218" cy="44" r="6" fill="#1e8a6b"/>
    <circle cx="252" cy="44" r="6" fill="#1e8a6b"/>
    <circle cx="290" cy="44" r="6" fill="#4a90e2"/>
    <circle cx="320" cy="44" r="6" fill="#4a90e2"/>
    <text x="305" y="32" text-anchor="middle" font-size="8" fill="#4a90e2" font-weight="700">переписали</text>
    <text x="280" y="100" text-anchor="middle" font-size="9" fill="#586575">переписывает</text>
    <text x="280" y="114" text-anchor="middle" font-size="9" fill="#586575">коммиты поверх</text>
    <text x="280" y="128" text-anchor="middle" font-size="9" fill="#586575">линейная история</text>
  </svg>`,

  'conflict': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="180" y="20" text-anchor="middle" font-size="11" fill="#586575">оба правили одну строку 5 в файле api.ts</text>
    <rect x="20" y="34" width="140" height="64" rx="6" fill="#fff" stroke="#4a90e2" stroke-width="2"/>
    <text x="90" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="#4a90e2">Иван</text>
    <text x="30" y="70" font-size="10" font-family="monospace" fill="#586575">5: timeout=30</text>
    <text x="30" y="86" font-size="10" font-family="monospace" fill="#586575">6: retry=3</text>

    <rect x="200" y="34" width="140" height="64" rx="6" fill="#fff" stroke="#d8513b" stroke-width="2"/>
    <text x="270" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="#d8513b">Аня</text>
    <text x="210" y="70" font-size="10" font-family="monospace" fill="#586575">5: timeout=60</text>
    <text x="210" y="86" font-size="10" font-family="monospace" fill="#586575">6: retry=3</text>

    <rect x="60" y="110" width="240" height="50" rx="6" fill="#fef7f5" stroke="#d8513b" stroke-width="2"/>
    <text x="180" y="128" text-anchor="middle" font-size="9" font-family="monospace" fill="#d8513b">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</text>
    <text x="180" y="142" text-anchor="middle" font-size="9" font-family="monospace" fill="#586575">timeout=? — Git не знает чьё взять</text>
    <text x="180" y="156" text-anchor="middle" font-size="9" font-family="monospace" fill="#d8513b">&gt;&gt;&gt;&gt;&gt;&gt;&gt; main</text>
  </svg>`,

  'pull-request': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="20" y1="40" x2="340" y2="40" stroke="#1e8a6b" stroke-width="3"/>
    <text x="14" y="32" font-size="10" fill="#1e8a6b" font-weight="800">main</text>
    <circle cx="60" cy="40" r="7" fill="#1e8a6b"/>
    <circle cx="120" cy="40" r="7" fill="#1e8a6b"/>
    <circle cx="320" cy="40" r="9" fill="#fff" stroke="#1e8a6b" stroke-width="2.5"/>

    <path d="M120 40 Q 150 70 180 80" stroke="#4a90e2" stroke-width="3" fill="none"/>
    <line x1="180" y1="80" x2="280" y2="80" stroke="#4a90e2" stroke-width="3"/>
    <path d="M280 80 Q 310 70 320 40" stroke="#4a90e2" stroke-width="3" fill="none" stroke-dasharray="4 3"/>
    <text x="14" y="86" font-size="10" fill="#4a90e2" font-weight="800">feature</text>
    <circle cx="200" cy="80" r="7" fill="#4a90e2"/>
    <circle cx="240" cy="80" r="7" fill="#4a90e2"/>
    <circle cx="280" cy="80" r="7" fill="#4a90e2"/>

    <rect x="60" y="110" width="240" height="54" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="180" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">Pull Request #42</text>
    <text x="180" y="143" text-anchor="middle" font-size="9" fill="#586575">«возьмите мой код в main»</text>
    <text x="80" y="158" font-size="9" fill="#1e8a6b">✓ ревью</text>
    <text x="160" y="158" font-size="9" fill="#1e8a6b">✓ CI</text>
    <text x="220" y="158" font-size="9" fill="#1e8a6b">✓ конфликтов нет</text>
  </svg>`,

  'code-review': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="20" width="220" height="140" rx="8" fill="#fff" stroke="#cdd5dd" stroke-width="1.5"/>
    <text x="124" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#16202a">api.ts (изменения)</text>
    <line x1="24" y1="46" x2="224" y2="46" stroke="#cdd5dd"/>
    <text x="32" y="62" font-size="10" font-family="monospace" fill="#586575">3  function load(){</text>
    <rect x="24" y="68" width="200" height="14" fill="#fdecea"/>
    <text x="32" y="78" font-size="10" font-family="monospace" fill="#d8513b">- 4    fetch(url)</text>
    <rect x="24" y="84" width="200" height="14" fill="#e6f4ec"/>
    <text x="32" y="94" font-size="10" font-family="monospace" fill="#1e8a6b">+ 4    fetch(url, opts)</text>
    <text x="32" y="110" font-size="10" font-family="monospace" fill="#586575">5  }</text>

    <rect x="24" y="120" width="200" height="34" rx="6" fill="#fff8e6" stroke="#e0a82b"/>
    <text x="32" y="134" font-size="9" font-weight="700" fill="#8a5a05">💬 Аня:</text>
    <text x="32" y="146" font-size="9" fill="#586575">а где обработка ошибок?</text>

    <rect x="246" y="40" width="100" height="100" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="296" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">статус</text>
    <text x="296" y="82" text-anchor="middle" font-size="22">🟡</text>
    <text x="296" y="106" text-anchor="middle" font-size="9" fill="#586575">changes</text>
    <text x="296" y="118" text-anchor="middle" font-size="9" fill="#586575">requested</text>
    <text x="296" y="134" text-anchor="middle" font-size="9" fill="#1e8a6b" font-weight="700">не мержим</text>
  </svg>`,

  'ci-actions': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="20" width="80" height="50" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="54" y="42" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">push / PR</text>
    <text x="54" y="58" text-anchor="middle" font-size="14">📤</text>

    <path d="M98 45 L130 45" stroke="#586575" stroke-width="2"/>
    <polygon points="128,40 138,45 128,50" fill="#586575"/>

    <rect x="142" y="14" width="76" height="62" rx="8" fill="#fff" stroke="#586575" stroke-width="2"/>
    <text x="180" y="30" text-anchor="middle" font-size="14">🤖</text>
    <text x="180" y="46" text-anchor="middle" font-size="10" font-weight="800" fill="#16202a">робот</text>
    <text x="180" y="60" text-anchor="middle" font-size="9" fill="#586575">.github/</text>
    <text x="180" y="72" text-anchor="middle" font-size="9" fill="#586575">workflows/</text>

    <path d="M222 34 L262 24" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="259,21 268,22 263,30" fill="#1e8a6b"/>
    <path d="M222 50 L262 50" stroke="#586575" stroke-width="2"/>
    <polygon points="260,45 270,50 260,55" fill="#586575"/>
    <path d="M222 66 L262 78" stroke="#d8513b" stroke-width="2"/>
    <polygon points="259,75 268,80 261,84" fill="#d8513b"/>

    <rect x="270" y="10" width="80" height="26" rx="5" fill="#e6f4ec"/>
    <text x="310" y="28" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">✓ build</text>
    <rect x="270" y="42" width="80" height="26" rx="5" fill="#e6f4ec"/>
    <text x="310" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">✓ lint</text>
    <rect x="270" y="74" width="80" height="26" rx="5" fill="#fdecea"/>
    <text x="310" y="92" text-anchor="middle" font-size="10" font-weight="800" fill="#d8513b">× tests</text>

    <text x="180" y="124" text-anchor="middle" font-size="10" font-weight="700" fill="#586575">пока есть × — мержить нельзя</text>
    <text x="180" y="142" text-anchor="middle" font-size="9" fill="#586575">CI = постоянная проверка</text>
    <text x="180" y="156" text-anchor="middle" font-size="9" fill="#586575">Actions = бесплатный сервер для проверок</text>
  </svg>`,

  'fork': `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="50" width="100" height="70" rx="8" fill="#f0f8f5" stroke="#1e8a6b" stroke-width="2"/>
    <text x="70" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">facebook/</text>
    <text x="70" y="90" text-anchor="middle" font-size="11" font-weight="800" fill="#1e8a6b">react</text>
    <text x="70" y="108" text-anchor="middle" font-size="9" fill="#586575">оригинал</text>

    <path d="M124 70 Q 160 50 200 50" stroke="#586575" stroke-width="2" stroke-dasharray="4 3"/>
    <polygon points="198,45 208,50 198,55" fill="#586575"/>
    <text x="166" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#586575">fork</text>

    <rect x="212" y="22" width="130" height="60" rx="8" fill="#fff" stroke="#4a90e2" stroke-width="2"/>
    <text x="277" y="44" text-anchor="middle" font-size="11" font-weight="800" fill="#4a90e2">myname/react</text>
    <text x="277" y="60" text-anchor="middle" font-size="9" fill="#586575">личная копия</text>
    <text x="277" y="74" text-anchor="middle" font-size="9" fill="#586575">правлю что хочу</text>

    <path d="M212 110 Q 170 130 124 110" stroke="#1e8a6b" stroke-width="2"/>
    <polygon points="126,105 116,110 126,115" fill="#1e8a6b"/>
    <text x="166" y="148" text-anchor="middle" font-size="10" font-weight="800" fill="#1e8a6b">Pull Request</text>
    <text x="166" y="162" text-anchor="middle" font-size="9" fill="#586575">«возьмите моё в оригинал»</text>

    <rect x="212" y="100" width="130" height="50" rx="8" fill="#fff" stroke="#4a90e2" stroke-width="2"/>
    <text x="277" y="122" text-anchor="middle" font-size="9" fill="#586575">мои коммиты,</text>
    <text x="277" y="136" text-anchor="middle" font-size="9" fill="#586575">мои ветки</text>
  </svg>`,
} as const

const conceptsRu: Concept[] = [
  {
    id: 'git-vs-github',
    title: 'Git ≠ GitHub',
    short: 'Это разные штуки. Часто их путают.',
    analogy: 'Git — это как Word, в котором вы пишете документ. GitHub — это как Google Drive, куда вы документ выкладываете и где другие могут его читать и комментировать. Можно использовать Git без GitHub (только локально), но GitHub без Git не работает.',
    detail: 'Git — программа на вашем компьютере. Она следит за версиями файлов и работает полностью офлайн. GitHub — сайт-хранилище в интернете. Он берёт репозиторий Git и добавляет сверху социальную часть: pull requests, issues, обсуждения, права доступа, автоматические проверки. Альтернативы GitHub: GitLab, Bitbucket, Gitea — все они поверх того же самого Git.',
    practice: 'Установите Git → проверьте `git --version`. Зарегистрируйтесь на github.com → создайте пустой репозиторий. Это два разных шага в двух разных местах.',
    pitfall: 'Сказать «закоммитил на GitHub» — нет, коммит делается локально. На GitHub он попадает только после `git push`.',
    viz: 'git-vs-github',
  },
  {
    id: 'repository',
    title: 'Репозиторий (repo)',
    short: 'Папка проекта + дневник всех изменений.',
    analogy: 'Представьте папку с файлами проекта. Внутри неё прячется маленькая скрытая папка `.git/` — это «дневник». Туда Git тихонько записывает: кто, когда, какую строку поменял. Дневник можно листать назад и вернуться к любой странице.',
    detail: 'Репозиторий — это просто папка, в которой выполнили `git init` или `git clone`. Внутри появляется `.git/` со всей историей. Если эту папку удалить — у вас останутся файлы, но пропадёт вся история и связь с GitHub. Если файлы удалить, а `.git/` оставить — историю можно восстановить.',
    practice: '`git init my-project` → папка стала репозиторием. `ls -la` покажет .git внутри.',
    pitfall: 'Скопировать папку без `.git/` — это уже не репозиторий, а просто файлы. Чтобы клонировать с историей, используйте `git clone`, а не «скопировать-вставить».',
    viz: 'repository',
  },
  {
    id: 'commit',
    title: 'Коммит',
    short: 'Сохранёнка проекта на момент времени.',
    analogy: 'Как сейв в компьютерной игре: «вот сюда я хочу иметь возможность вернуться». Только сейв в Git ещё хранит, кто его сделал, когда и почему (ваше сообщение к коммиту).',
    detail: 'Коммит — снимок состояния всех отслеживаемых файлов + метаданные (автор, дата, сообщение, ссылка на родительский коммит). У каждого коммита есть уникальный хэш (например `a1b2c3d`). Коммиты выстраиваются в цепочку — это и есть история. Хорошее сообщение коммита отвечает на вопрос «зачем это изменение», а не «что я поменял» (это и так видно в diff).',
    practice: '`git add file.ts` → `git commit -m "feat: add login"`. Сообщение в стиле Conventional Commits (feat/fix/chore/docs) автоматически читается changelog-генераторами.',
    pitfall: 'Коммитить раз в неделю огромный кусок «всё что наработал». Лучше — маленькие коммиты, каждый со своей задачей. Так проще читать историю и откатывать.',
    viz: 'commit',
  },
  {
    id: 'branch',
    title: 'Ветка (branch)',
    short: 'Параллельная вселенная вашего проекта.',
    analogy: 'Представьте, что вы пишете книгу и хотите попробовать другую концовку. Вы делаете копию рукописи, экспериментируете в копии, и если получилось — переносите в основную. Не получилось — выбрасываете копию, основная не пострадала.',
    detail: 'Ветка — это просто указатель на коммит. Создание ветки почти ничего не стоит (никакого копирования файлов). Главная ветка обычно называется `main` (раньше `master`). Все новые работы делаются в отдельных feature-ветках, чтобы `main` всегда оставалась рабочей. Готовая ветка вливается в `main` через Pull Request.',
    practice: '`git switch -c feature/login` создаёт ветку и переключается на неё. `git switch main` — обратно в основную. `git branch` — список всех веток.',
    pitfall: 'Делать всё прямо в `main`. Когда подключатся коллеги, такая ветка превращается в кашу из конфликтов и недоделок.',
    viz: 'branch',
  },
  {
    id: 'head',
    title: 'HEAD',
    short: 'Закладка «вы находитесь здесь».',
    analogy: 'В книге, которую вы читаете, есть закладка. Она показывает, на какой странице вы сейчас. HEAD — это закладка Git: на каком коммите и в какой ветке вы сейчас находитесь. Когда вы делаете новый коммит — закладка автоматически перемещается на него.',
    detail: 'HEAD — специальный указатель на «текущее место». Обычно HEAD указывает на ветку, а ветка — на последний коммит. После `git switch other-branch` HEAD переезжает на ту ветку. После `git checkout a1b2c3d` (хэш) HEAD указывает напрямую на коммит — это «detached HEAD», в нём можно смотреть код, но новые коммиты потеряются, если не создать ветку.',
    practice: '`git log --oneline -5` покажет несколько последних коммитов и пометит, на котором стоит HEAD.',
    pitfall: 'Закоммитить что-то в detached HEAD и переключиться обратно — коммиты «потеряются» (но их можно найти через `git reflog`).',
    viz: 'head',
  },
  {
    id: 'remote',
    title: 'Remote и origin',
    short: 'Адрес копии репозитория в облаке.',
    analogy: 'У вас на компьютере — рабочий черновик. На GitHub — «эталонная» копия, которой пользуется вся команда. Эту копию называют `remote`, а её основной адрес по умолчанию — `origin`. Это как «дом родителей»: одно из мест, куда вы регулярно отправляете фотки.',
    detail: '`origin` — это просто условное имя для удалённого репозитория. Можно завести несколько remote-ов (например, `origin` для своего форка и `upstream` для оригинала). Каждый remote хранит ссылку на серверы. Команда `git remote -v` покажет все настроенные адреса.',
    practice: '`git remote -v` → увидите URL вашего origin. `git remote add upstream https://github.com/org/orig.git` — добавить ещё один.',
    pitfall: 'Думать, что после `git commit` коллеги уже видят изменения. Нет — пока вы не сделали `git push`, коммит лежит только у вас.',
    viz: 'remote',
  },
  {
    id: 'clone-fetch-pull-push',
    title: 'clone, fetch, pull, push',
    short: '4 действия между вашим компом и GitHub.',
    analogy: 'Представьте облачный диск. **clone** — скачать папку первый раз. **fetch** — посмотреть, что новенького появилось (но к себе ещё не применять). **pull** — посмотреть и сразу применить к себе. **push** — выложить свои изменения наверх. Только так трафик ходит между вашим компом и GitHub.',
    detail: 'clone делается один раз — он создаёт локальный репозиторий. fetch — безопасная команда, она только обновляет информацию о remote, не трогая ваши файлы. pull = fetch + merge (или fetch + rebase, если настроено). push отправляет ваши коммиты на сервер. Если на сервере появились новые коммиты, push отклонится — нужно сначала pull.',
    practice: '`git clone <url>` → клонировать. Утром: `git pull` → забрать новости. Вечером: `git push` → отправить свои.',
    pitfall: 'Сделать `git pull` посреди недоделанной работы — Git может потребовать сначала закоммитить или спрятать (`git stash`) текущие правки.',
    viz: 'clone-fetch-pull-push',
  },
  {
    id: 'merge-vs-rebase',
    title: 'merge vs rebase',
    short: 'Два способа объединить параллельные ветки.',
    analogy: '**merge** — как сшить два листа скотчем: оба видны, есть «шов» (merge-коммит). **rebase** — переписать вторую страницу так, будто она шла сразу после первой: получается аккуратная единая страница, но это уже не оригинал, а перепечатка.',
    detail: 'merge берёт две ветки и создаёт новый коммит-слияние. История сохраняется как было, но граф нелинейный. rebase «переставляет» ваши коммиты так, будто вы их сделали поверх свежего main. История линейная и чистая, но коммиты получают новые хэши — это переписывание истории. Правило: rebase используют только на своих локальных ветках до push.',
    practice: 'Перед PR: `git fetch origin` → `git rebase origin/main` → линейная история. После rebase: `git push --force-with-lease`.',
    pitfall: 'Сделать rebase на ветке, которой пользуются коллеги, и push --force — у них поломается история. Никогда не делайте rebase общих веток.',
    viz: 'merge-vs-rebase',
  },
  {
    id: 'conflict',
    title: 'Конфликт слияния',
    short: 'Двое поменяли одну строку — Git не знает, чьё взять.',
    analogy: 'Два человека одновременно редактировали один абзац в Google Docs, но без интернета. Когда они пытаются объединить версии, появляется вопрос: «Чей вариант оставить?» Решает только человек.',
    detail: 'Когда Git не может автоматически слить изменения, он вставляет в файл маркеры `<<<<<<<`, `=======`, `>>>>>>>` — между ними два варианта. Ваша задача — открыть файл, выбрать нужный (или собрать из обеих), удалить маркеры, `git add` файл и `git commit` (если был merge) или `git rebase --continue` (если был rebase). VS Code подсвечивает конфликты и даёт кнопки «Accept Current / Incoming / Both».',
    practice: 'Создайте конфликт намеренно: в двух ветках поменяйте одну и ту же строку. Сделайте merge — увидите маркеры, разрешите вручную.',
    pitfall: 'Закоммитить файл с оставшимися `<<<<<<<` внутри. Код не скомпилируется, CI упадёт, ревьюверы расстроятся.',
    viz: 'conflict',
  },
  {
    id: 'pull-request',
    title: 'Pull Request (PR)',
    short: 'Заявка «возьмите мой код в основной проект».',
    analogy: 'Вы написали статью в журнал и отправили редакторам с пометкой «опубликуйте, пожалуйста». Редакторы читают, оставляют замечания, вы правите, и в итоге статья выходит в номер. PR — то же самое, только для кода.',
    detail: 'PR — это страница на GitHub, где сравниваются две ветки: ваша и целевая (обычно `main`). Видно diff всех файлов, обсуждения по строкам, статусы CI, кнопка «Merge». Хороший PR — небольшой (200–400 строк), с понятным описанием в шаблоне «зачем / что / как тестировать».',
    practice: 'После push новой ветки GitHub предложит «Compare & pull request». Или из VS Code: команда «GitHub Pull Requests: Create Pull Request».',
    pitfall: 'PR на 3000 строк, без описания, со смешанными фичами и рефакторингом. Никто не сможет такое нормально отревьюить.',
    viz: 'pull-request',
  },
  {
    id: 'code-review',
    title: 'Code Review',
    short: 'Коллеги читают ваш PR перед слиянием.',
    analogy: 'Корректор и редактор читают вашу статью перед публикацией. Они подсвечивают опечатки, неудачные фразы, советуют переписать абзац. Их задача — не унизить, а сделать текст лучше.',
    detail: 'Ревьювер видит diff, может оставлять комментарии к конкретным строкам, ставить статус: Comment (просто мысли), Approve (готово к merge), Request Changes (нужно исправить). Хорошая практика: автор просит ревью у 1–2 человек, отвечает на каждый комментарий («исправил» / «не согласен, потому что…»), не воспринимает критику лично.',
    practice: 'В VS Code откройте PR через GitHub Pull Requests, нажмите «Start Review», кликайте по строкам и пишите замечания.',
    pitfall: 'Ревьювер пишет «здесь не нравится» без объяснения. Или автор обижается и спорит ради спора. Здоровая команда обсуждает варианты, а не личности.',
    viz: 'code-review',
  },
  {
    id: 'ci-actions',
    title: 'CI и GitHub Actions',
    short: 'Робот, который проверяет ваш код после каждого push.',
    analogy: 'Представьте робота-корректора, который читает каждое ваше изменение и сообщает: «всё правильно» или «здесь ошибка на странице 3». Он работает 24/7, не устаёт и проверяет всегда одинаково. CI — это идея, GitHub Actions — конкретная реализация на GitHub.',
    detail: 'CI (Continuous Integration) — практика автоматически собирать и тестировать код при каждом изменении. GitHub Actions — встроенный в GitHub сервис, выполняет сценарии (workflows) из файлов `.github/workflows/*.yml`. Типовые проверки: запуск тестов, линтер, сборка, безопасность зависимостей. В правилах ветки можно запретить merge, пока CI не зелёный.',
    practice: 'Создайте `.github/workflows/ci.yml` с шагами `npm ci` и `npm test`. Откройте PR — увидите статус «Checks» прямо в нём.',
    pitfall: 'Игнорировать падающий CI «потому что у меня локально работает». Чаще всего проблема — другая версия Node или забытая переменная окружения.',
    viz: 'ci-actions',
  },
  {
    id: 'fork',
    title: 'Fork',
    short: 'Личная копия чужого репозитория на GitHub.',
    analogy: 'Вы хотите дописать главу в чужую книгу, но прав на оригинал у вас нет. Вы делаете полную фотокопию книги к себе, дописываете главу, потом приходите к автору с предложением: «возьмите мою главу в оригинал». Автор решает.',
    detail: 'Fork — кнопка на странице репозитория. После клика появляется копия `myname/repo` под вашим аккаунтом, в которую вы можете пушить. Чтобы предложить изменения в оригинал — открываете PR из своего форка. Используется в open source: вы не можете писать в `facebook/react`, но можете форкнуть и прислать PR. Также — на работе, если у вас нет прав на push в защищённую ветку.',
    practice: 'На странице любого open-source репозитория — кнопка Fork. Затем `git clone <ваш-форк>`, правки, push, открыть PR.',
    pitfall: 'Форк сделали год назад и забыли. Чтобы синхронизироваться: добавить `upstream` (оригинал) и регулярно `git fetch upstream && git rebase upstream/main`.',
    viz: 'fork',
  },
]

// ============================================================================
// TRACKS — практикум прокачки
// ============================================================================

const tracksRu: Track[] = [
  {
    id: 'solo',
    level: 'Уровень 1',
    emoji: '🟢',
    title: 'Соло-разработчик',
    intro: 'Базовый цикл: создать проект, вести историю, выложить на GitHub, восстановиться после ошибки. Без этого дальше идти бесполезно.',
    exercises: [
      {
        title: 'Поднять первый репозиторий с нуля',
        goal: 'Понять, что такое локальный репозиторий и как он связан с GitHub.',
        steps: [
          'Создайте папку `playground`, внутри `git init`',
          'Создайте `README.md` с одной строкой текста',
          'Сделайте `git add README.md`, потом `git commit -m "init"`',
          'На GitHub создайте пустой репозиторий с тем же именем',
          '`git remote add origin <url>` → `git push -u origin main`',
        ],
        done: 'Файл виден на странице репозитория на GitHub.',
      },
      {
        title: 'Серия осмысленных коммитов',
        goal: 'Научиться разбивать работу на маленькие логические шаги.',
        steps: [
          'Добавьте 3 файла: `index.html`, `style.css`, `script.js`',
          'Каждый файл — отдельный коммит с сообщением вида `feat: add ...`',
          'Сделайте `git log --oneline` и убедитесь, что история читается как «инструкция»',
        ],
        done: 'В `git log` видны 3 коммита, по сообщению понятно что в каком сделано.',
      },
      {
        title: 'Поработать в ветке и слить',
        goal: 'Понять, зачем существуют ветки.',
        steps: [
          '`git switch -c feature/dark-mode`',
          'Внесите 2–3 правки и закоммитьте',
          '`git switch main` → `git merge feature/dark-mode`',
          '`git branch -d feature/dark-mode` (удалить локально)',
        ],
        done: 'В `git log --graph --oneline --all` видна ветка и слияние.',
      },
      {
        title: 'Откатить случайные изменения',
        goal: 'Не бояться экспериментировать — Git всегда поможет.',
        steps: [
          'В рабочем файле сломайте код намеренно',
          'Если ещё не было `add`: `git restore <file>` → файл вернётся',
          'Если уже сделали add: `git restore --staged <file>` → потом `git restore <file>`',
          'Если уже закоммитили: `git revert HEAD` создаст обратный коммит',
        ],
        done: 'Понимаете разницу между restore, restore --staged, revert и reset.',
      },
      {
        title: 'Вернуться к старой версии файла',
        goal: 'Уметь вытащить файл из истории, не трогая остальное.',
        steps: [
          'Найдите хэш коммита в `git log --oneline`',
          '`git show <hash>:path/to/file` — посмотреть содержимое',
          '`git restore --source=<hash> path/to/file` — вернуть',
        ],
        done: 'Файл откатился к нужной версии, остальное не пострадало.',
      },
      {
        title: 'Спрятать незавершённое через stash',
        goal: 'Уметь временно убрать правки, чтобы переключиться на срочное.',
        steps: [
          'Внесите правки, не коммитьте',
          '`git stash push -m "wip dark mode"`',
          'Переключитесь на другую ветку, поработайте',
          'Вернитесь: `git stash list` → `git stash pop`',
        ],
        done: 'Правки вернулись на место, stash пуст.',
      },
    ],
  },
  {
    id: 'opensource',
    level: 'Уровень 2',
    emoji: '🟡',
    title: 'Контрибьютор open source',
    intro: 'Как предложить правку в чужой проект, синхронизироваться с оригиналом и не запутаться в форках.',
    exercises: [
      {
        title: 'Сделать первый PR в чужой репозиторий',
        goal: 'Пройти полный цикл fork → clone → branch → PR.',
        steps: [
          'Найдите репозиторий с тегом `good first issue` (например, через github.com/explore)',
          'Нажмите Fork → получите копию `myname/repo`',
          '`git clone git@github.com:myname/repo.git`',
          '`git switch -c fix/typo-in-readme`',
          'Внесите правку, коммит, `git push -u origin fix/typo-in-readme`',
          'На GitHub нажмите «Compare & pull request», заполните описание',
        ],
        done: 'PR появился в оригинальном репозитории, у него номер и статус Open.',
      },
      {
        title: 'Подключить upstream и синхронизировать форк',
        goal: 'Не отставать от оригинала.',
        steps: [
          '`git remote add upstream <url оригинала>`',
          '`git remote -v` — должно быть 2 remote: origin (ваш) и upstream',
          '`git fetch upstream`',
          '`git switch main` → `git rebase upstream/main`',
          '`git push --force-with-lease origin main`',
        ],
        done: '`git log --oneline` показывает все свежие коммиты из оригинала.',
      },
      {
        title: 'Ответить на замечания мейнтейнера в PR',
        goal: 'Понять, как итеративно дорабатывать PR.',
        steps: [
          'В той же feature-ветке внесите правки по комментариям',
          'Закоммитьте: `git commit -m "review: rename variable"`',
          '`git push` — PR обновится автоматически',
          'В обсуждении ответьте на каждый комментарий или нажмите Resolve',
        ],
        done: 'Все треды Resolved, PR заmerged.',
      },
      {
        title: 'Подписывать коммиты GPG/SSH-подписью',
        goal: 'Получить значок Verified в коммитах — это требование во многих open-source проектах.',
        steps: [
          'Сгенерируйте SSH-ключ для подписи: `ssh-keygen -t ed25519 -f ~/.ssh/sign`',
          'В GitHub Settings → SSH and GPG keys → добавьте ключ как Signing key',
          '`git config --global gpg.format ssh`',
          '`git config --global user.signingkey ~/.ssh/sign.pub`',
          '`git config --global commit.gpgsign true`',
        ],
        done: 'Новые коммиты на GitHub помечены значком Verified.',
      },
      {
        title: 'Найти и принять чужой PR в свой проект',
        goal: 'Побыть мейнтейнером.',
        steps: [
          'Откройте PR из коллеги в своём репозитории',
          'В VS Code: GitHub Pull Requests → Checkout PR',
          'Запустите проект локально, протестируйте',
          'Оставьте 2–3 комментария к строкам, потом Approve и Merge',
        ],
        done: 'PR влит, ветка автоматически удалена.',
      },
    ],
  },
  {
    id: 'team',
    level: 'Уровень 3',
    emoji: '🟠',
    title: 'Член команды',
    intro: 'Ежедневная работа в команде из 3+ человек: ветки, ревью, конфликты, релизы. Здесь начинается «уверенный пользователь».',
    exercises: [
      {
        title: 'Работать по стратегии trunk-based',
        goal: 'Освоить самый простой и безопасный подход к ветвлению.',
        steps: [
          'Утром: `git switch main` → `git pull --rebase`',
          '`git switch -c feature/my-task`',
          'Маленькие коммиты в течение дня',
          'Перед PR: `git fetch origin` → `git rebase origin/main`',
          'Открыть PR, дождаться зелёного CI и approve, нажать Merge',
        ],
        done: 'Ветка живёт меньше 2 дней, PR не превышает 400 строк.',
      },
      {
        title: 'Разрулить настоящий конфликт слияния',
        goal: 'Перестать паниковать при виде `<<<<<<<`.',
        steps: [
          'Создайте две ветки от main, в обеих поправьте одну и ту же строку',
          'Слейте первую в main, потом попробуйте rebase второй на main',
          'Откройте файл с конфликтом в VS Code → используйте кнопки «Accept Current/Incoming/Both»',
          '`git add <file>` → `git rebase --continue`',
          'Запустите тесты, убедитесь что код работает',
        ],
        done: 'Конфликт разрешён, CI зелёный, никаких маркеров `<<<` в файлах.',
      },
      {
        title: 'Сделать stacked PR-ы',
        goal: 'Уметь разбивать большую задачу на цепочку маленьких PR.',
        steps: [
          'От main: `git switch -c refactor/extract-api`',
          'Сделайте рефакторинг, открыть PR в main',
          'От той же ветки: `git switch -c feature/profile-page`',
          'Сделайте фичу, открыть PR в `refactor/extract-api`',
          'После merge первого — GitHub автоматически переключит base второго на main',
        ],
        done: 'Два открытых PR, второй ждёт merge первого.',
      },
      {
        title: 'Провести ревью PR коллеги',
        goal: 'Научиться давать конструктивную обратную связь.',
        steps: [
          'Откройте PR, переключитесь на ветку через GitHub Pull Requests в VS Code',
          'Прочитайте описание PR, поймите задачу',
          'Идите по diff: ищите неясные места, потенциальные баги, отсутствующие тесты',
          'К каждому замечанию — конкретное предложение, а не «не нравится»',
          'Поставьте Approve / Request changes / Comment',
        ],
        done: 'Автор ответил на ваши комментарии, PR улучшился перед merge.',
      },
      {
        title: 'Откатить плохой коммит из main',
        goal: 'Уметь быстро вернуть прод в рабочее состояние.',
        steps: [
          'В `git log --oneline -10` найдите проблемный merge-коммит',
          '`git revert -m 1 <merge-hash>` — создаст обратный коммит',
          '`git push origin main`',
          'Откройте hotfix-ветку, исправьте проблему, новый PR',
        ],
        done: 'main снова работает, в истории видны и поломка, и revert.',
      },
      {
        title: 'Использовать draft PR для ранней обратной связи',
        goal: 'Получать ревью на архитектуру до того, как написали 1000 строк.',
        steps: [
          'После 1–2 коммитов с черновой реализацией откройте PR как Draft',
          'В описании задайте вопросы: «правильно ли я понял задачу?», «такой ли подход?»',
          'Получите фидбек, доработайте',
          'Когда готово — нажмите «Ready for review»',
        ],
        done: 'PR прошёл этап Draft и был замержен без серьёзных переделок.',
      },
      {
        title: 'Защитить main через branch protection',
        goal: 'Гарантировать, что в main не попадёт код без ревью и зелёного CI.',
        steps: [
          'Settings → Branches → Add rule для `main`',
          'Включите: Require pull request, Require approvals (1+), Require status checks',
          'Выберите чек CI (например, build + test)',
          'Включите: Require linear history, Do not allow bypassing',
        ],
        done: 'Прямой push в main отклоняется, PR без approve не мержится.',
      },
      {
        title: 'Настроить CODEOWNERS',
        goal: 'Автоматически назначать ревьюверов по областям кода.',
        steps: [
          'Создайте файл `.github/CODEOWNERS`',
          'Пример: `/backend/ @backend-team` и `*.tsx @frontend-team`',
          'Закоммитьте в main',
          'Откройте PR с правками в backend — Git автоматически попросит ревью у @backend-team',
        ],
        done: 'PR показывает «Required reviewers from CODEOWNERS».',
      },
      {
        title: 'Использовать `git bisect` чтобы найти баг',
        goal: 'Найти регрессию между двумя релизами.',
        steps: [
          '`git bisect start`',
          '`git bisect bad` (текущий сломан) → `git bisect good v1.4.0` (рабочий)',
          'Git выдаёт коммит посередине — запустите тест/проверьте вручную',
          'Помечайте `git bisect good` или `bad` — Git делит дальше',
          'В конце Git покажет «first bad commit». `git bisect reset`',
        ],
        done: 'Найден точный коммит, в котором появился баг.',
      },
    ],
  },
  {
    id: 'maintainer',
    level: 'Уровень 4',
    emoji: '🔴',
    title: 'Мейнтейнер / тимлид',
    intro: 'Управление репозиторием: автоматизация, релизы, безопасность, шаблоны для команды. Это уже про продвинутого пользователя GitHub.',
    exercises: [
      {
        title: 'Настроить шаблоны issue и PR',
        goal: 'Стандартизировать обращения и описания PR.',
        steps: [
          'Создайте `.github/ISSUE_TEMPLATE/bug.yml` и `feature.yml` (формат YAML с полями)',
          'Создайте `.github/pull_request_template.md` с разделами: «Что», «Зачем», «Как тестировать», «Чеклист»',
          'Закоммитьте в main',
          'Создайте новый issue → откроется выбор шаблона',
        ],
        done: 'Все новые issue/PR заполняются по единому формату.',
      },
      {
        title: 'Запустить первый CI workflow',
        goal: 'Автоматизировать тесты и линт.',
        steps: [
          '`.github/workflows/ci.yml` с триггером `on: [push, pull_request]`',
          'Шаги: `actions/checkout@v4`, `actions/setup-node@v4`, `npm ci`, `npm test`',
          'Закоммитьте, откройте PR — увидите статус Checks',
          'В branch protection сделайте этот чек обязательным',
        ],
        done: 'PR без зелёного CI не мержится.',
      },
      {
        title: 'Выпустить релиз с changelog',
        goal: 'Использовать GitHub Releases для версионирования.',
        steps: [
          '`git tag -a v1.0.0 -m "First stable"` → `git push origin v1.0.0`',
          'На GitHub → Releases → Draft a new release → выберите тег',
          'Нажмите «Generate release notes» — GitHub соберёт changelog из PR-ов',
          'Опубликуйте',
        ],
        done: 'Релиз виден в разделе Releases, есть скачиваемые архивы.',
      },
      {
        title: 'Автоматический деплой через Actions',
        goal: 'После merge в main код сам уезжает на staging/prod.',
        steps: [
          'Workflow с триггером `on: push: branches: [main]`',
          'Шаги: build → upload artifact → deploy (например, через actions/deploy-pages или vercel)',
          'Секреты (токены, ключи) — в Settings → Secrets and variables → Actions',
          'Используйте в workflow: `${{ secrets.DEPLOY_TOKEN }}`',
        ],
        done: 'Merge в main автоматически обновляет окружение.',
      },
      {
        title: 'Включить Dependabot и security alerts',
        goal: 'Получать PR с обновлениями уязвимых зависимостей.',
        steps: [
          'Settings → Code security and analysis → включите Dependabot alerts и version updates',
          'Создайте `.github/dependabot.yml` с расписанием weekly',
          'Дождитесь автоматических PR от dependabot[bot]',
        ],
        done: 'В Pull Requests появились PR от Dependabot.',
      },
      {
        title: 'Настроить secret scanning и push protection',
        goal: 'Не дать команде залить токены в репозиторий.',
        steps: [
          'Settings → Code security → включите Secret scanning + Push protection',
          'Попробуйте намеренно закоммитить тестовый AWS-ключ — push будет отклонён',
          'В случае утечки в истории — `git filter-repo --invert-paths --path .env`',
        ],
        done: 'Push с потенциальным секретом блокируется автоматически.',
      },
      {
        title: 'Создать GitHub Project для команды',
        goal: 'Видеть всю работу одной доской.',
        steps: [
          'Projects → New project → выберите Board или Table',
          'Свяжите с репозиторием, добавьте поля: Status, Priority, Sprint',
          'Включите автоматизацию: при открытии PR карточка → In Review, при merge → Done',
        ],
        done: 'Команда работает по доске, статусы обновляются сами.',
      },
    ],
  },
]

const casesRu: Case[] = [
  {
    icon: '🔑',
    title: 'Закоммитил .env с паролями',
    problem: 'PR (pull request) уже открыт, в истории видны API-ключи. Reset бессмыслен — секрет уже на GitHub.',
    solution: 'Сразу отозвите токен в панели провайдера, добавьте .env в .gitignore, почистите историю и форс-пушьте ветку. Предупредите команду: им нужно будет переклонировать репозиторий.',
    commands: ['echo .env >> .gitignore', 'git rm --cached .env', 'git commit -m "Stop tracking .env"', 'git filter-repo --path .env --invert-paths', 'git push origin --force --all'],
    tag: 'security',
    viz: 'secret-leak',
  },
  {
    icon: '⚠️',
    title: 'Сделал commit не в ту ветку',
    problem: 'Полчаса кодил в main вместо feature-ветки. Push ещё не сделан.',
    solution: 'Создайте новую ветку от текущего состояния, верните main к версии origin/main. Шаги безопасны, пока ничего не отправлено.',
    commands: ['git switch -c feature/oops', 'git switch main', 'git reset --hard origin/main', 'git switch feature/oops'],
    tag: 'oops',
    viz: 'wrong-branch',
  },
  {
    icon: '🔄',
    title: 'rebase сломал ветку',
    problem: 'После git rebase -i история выглядит странно, коммиты исчезли.',
    solution: 'Посмотрите reflog и верните ветку к состоянию до rebase по хэшу. Reflog хранит практически все перемещения HEAD.',
    commands: ['git reflog', 'git reset --hard HEAD@{5}'],
    tag: 'oops',
    viz: 'rebase-broken',
  },
  {
    icon: '🧹',
    title: 'Удалил ветку, которая была нужна',
    problem: 'После git branch -D ветка исчезла, но в ней оставался нужный код.',
    solution: 'Найдите последний коммит ветки в reflog и восстановите ветку из хэша.',
    commands: ['git reflog', 'git branch feature/login a1b2c3d', 'git switch feature/login'],
    tag: 'oops',
    viz: 'deleted-branch',
  },
  {
    icon: '📄',
    title: 'Нужно выбросить файл из предыдущего коммита',
    problem: 'В последний коммит попало лишнее: большой бинарник или временный файл.',
    solution: 'Удалите файл, добавьте в .gitignore и перепишите последний коммит через amend.',
    commands: ['git rm --cached build.zip', 'echo build.zip >> .gitignore', 'git add .gitignore', 'git commit --amend --no-edit', 'git push --force-with-lease'],
    tag: 'oops',
    viz: 'wrong-file',
  },
  {
    icon: '⛔',
    title: 'Коллега сделал force-push в вашу ветку',
    problem: 'Ваши локальные коммиты расходятся с origin, push отклоняется.',
    solution: 'Никакого --force с вашей стороны. Создайте страховочную ветку, заберите версию с origin, вручную перенесите свои коммиты cherry-pick. Обсудите ситуацию с командой.',
    commands: ['git branch backup-mywork', 'git fetch origin', 'git reset --hard origin/feature/x', 'git cherry-pick backup-mywork~2..backup-mywork'],
    tag: 'team',
    viz: 'force-push',
  },
  {
    icon: '🤝',
    title: 'PR (pull request) разросся и никто не хочет его ревьюить',
    problem: '300+ файлов, смешаны рефакторинг и новая фича.',
    solution: 'Разбейте на stacked PR (pull request)-ы: выделите рефакторинг в отдельную ветку, фичу — поверх неё. Каждый PR (pull request) по ​200–400 строк ревьюится в несколько раз быстрее.',
    commands: ['git switch -c refactor/extract-api main', 'git cherry-pick <refactor commits>', 'gh pr create --base main --title "Refactor API layer"', 'git switch -c feature/profile refactor/extract-api'],
    tag: 'team',
    viz: 'big-pr',
  },
  {
    icon: '📦',
    title: 'Большие бинарные файлы в репозитории',
    problem: 'Видео, PSD и датасеты раздувают clone до нескольких ГБ.',
    solution: 'Подключите Git LFS, укажите паттерны файлов, закоммитьте .gitattributes. Старые бинарники из истории убирайте git filter-repo.',
    commands: ['git lfs install', 'git lfs track "*.psd"', 'git add .gitattributes', 'git add design/hero.psd', 'git commit -m "Move design assets to LFS"'],
    tag: 'release',
    viz: 'lfs',
  },
  {
    icon: '🔍',
    title: 'Не понятно, когда сломался тест',
    problem: 'Тест падает на проде, но в прошлой версии работал. Сотни коммитов между.',
    solution: 'Используйте git bisect: Git бинарным поиском найдёт коммит, в котором появился баг. На каждом шаге запускайте тест и помечайте good/bad.',
    commands: ['git bisect start', 'git bisect bad', 'git bisect good v1.3.0', 'npm test', 'git bisect good   # или bad', 'git bisect reset'],
    tag: 'history',
    viz: 'bisect',
  },
  {
    icon: '⏪',
    title: 'Нужно откатить релиз в проде',
    problem: 'Релиз выложен, пользователи жалуются. Нужно быстро вернуть.',
    solution: 'Никогда не переписывайте историю main. Сделайте revert мерж-коммита PR или откатите релиз через GitHub Releases. После этого выпустите hotfix.',
    commands: ['git revert -m 1 <merge-commit>', 'git push origin main', 'gh release edit v1.4.0 --draft'],
    tag: 'release',
    viz: 'rollback',
  },
  {
    icon: '✍️',
    title: 'Неправильный автор в коммите',
    problem: 'Коммит ушёл с рабочего email коллеги или с личным именем вместо рабочего.',
    solution: 'Укажите правильного автора в последнем коммите или сразу настройте локальный user.email для этого проекта.',
    commands: ['git config user.email "work@company.com"', 'git commit --amend --author="Ivan <work@company.com>" --no-edit', 'git push --force-with-lease'],
    tag: 'oops',
    viz: 'wrong-author',
  },
  {
    icon: '🌐',
    title: 'CI красный, а локально всё зелёно',
    problem: 'GitHub Actions падают на вашей ветке, локально ничего не воспроизводится.',
    solution: 'Откройте вкладку Actions в PR, посмотрите лог фаилившего шага. Сравните версию Node, переменные среды, временные зоны. Часто хватает выровнять версию Node из .nvmrc.',
    commands: ['gh run list --branch feature/x', 'gh run view <id> --log-failed', 'node -v   # сравните с actions/setup-node в .github/workflows'],
    tag: 'team',
    viz: 'ci-mismatch',
  },
  {
    icon: '🔗',
    title: 'Переход с HTTPS на SSH',
    problem: 'GitHub постоянно спрашивает пароль, или организация требует SSH.',
    solution: 'Создайте ed25519-ключ, добавьте публичную часть в GitHub Settings, переключите origin на SSH-URL. Проверьте ssh -T git@github.com.',
    commands: ['ssh-keygen -t ed25519 -C "work@company.com"', 'cat ~/.ssh/id_ed25519.pub', 'gh ssh-key add ~/.ssh/id_ed25519.pub --title "work-laptop"', 'git remote set-url origin git@github.com:org/repo.git'],
    tag: 'security',
    viz: 'ssh',
  },
  {
    icon: '📝',
    title: 'Нужно переписать сообщения последних коммитов',
    problem: 'Коммиты названы в стиле "fix", "asdf", "ещё один фикс". PR-историю нельзя читать.',
    solution: 'Интерактивный rebase позволит reword или squash коммиты. Соберите логичную историю, после чего форс-пуш с lease.',
    commands: ['git rebase -i origin/main', '# в редакторе поменяйте pick на reword/squash', 'git push --force-with-lease'],
    tag: 'history',
    viz: 'rewrite',
  },
  {
    icon: '🌁',
    title: 'CRLF против LF на Windows',
    problem: 'Диффы показывают весь файл изменённым, хотя никто ничего не менял. Причина — переносы строк.',
    solution: 'Добавьте .gitattributes, настройте core.autocrlf в команде единообразно. Договоритесь, что в репозитории всегда хранится LF.',
    commands: ['echo "* text=auto eol=lf" > .gitattributes', 'git config --global core.autocrlf input', 'git add --renormalize .', 'git commit -m "Normalize line endings"'],
    tag: 'team',
    viz: 'crlf',
  },
  {
    icon: '📁',
    title: 'submodule отстал или пуст',
    problem: 'После clone папка submodule пуста, сборка ломается.',
    solution: 'Инициализируйте сабмодули и обновите их до правильных коммитов. Для последующих clone добавляйте --recurse-submodules.',
    commands: ['git submodule update --init --recursive', 'git submodule foreach git pull origin main'],
    tag: 'team',
    viz: 'submodule',
  },
  {
    icon: '🧹',
    title: 'Устаревшие remote-tracking ветки засоряют список',
    problem: 'После мержа десятка PR ветки удалены на GitHub, но git branch -r до сих пор показывает origin/feature-xxx. Непонятно, какие ветки реально актуальны.',
    solution: 'Выполните git fetch --prune — удалятся все remote-tracking ссылки, которых уже нет на сервере. Чтобы это происходило автоматически при каждом fetch/pull, настройте глобальный параметр fetch.prune. Локальные ветки (если остались) удалите отдельно через git branch -d.',
    commands: ['git fetch --prune', 'git config --global fetch.prune true', 'git branch -d feature/login'],
    tag: 'team',
    viz: 'prune',
  },
]

const strategiesRu: Strategy[] = [
  {
    name: 'Merge commit',
    summary: 'Создаёт отдельный merge-коммит и сохраняет все коммиты PR (pull request) как есть.',
    when: 'Команда хочет видеть, как велась работа по фиче.',
    pros: ['Сохраняет полную историю', 'Ничего не переписывает', 'История ревью понятна'],
    cons: ['Много шума в git log', 'Нелинейный граф истории'],
  },
  {
    name: 'Squash and merge',
    summary: 'Склеивает все коммиты PR (pull request) в один и добавляет в main.',
    when: 'Команда хочет линейную историю, 1 PR = 1 коммит.',
    pros: ['Чистый и линейный main', 'Легко делать revert фичи', 'Не видны WIP-коммиты'],
    cons: ['Теряется история по шагам', 'Авторство сливается в одного'],
  },
  {
    name: 'Rebase and merge',
    summary: 'Переносит коммиты PR (pull request) поверх main без merge-коммита.',
    when: 'Команда хочет линейную историю, но сохранить все коммиты.',
    pros: ['Идеально линейный граф', 'Коммиты остаются отдельными', 'Легко bisect-ить ошибки'],
    cons: ['Автор должен держать ветку чистой', 'Конфликты решаются пошагово', 'Хэши коммитов меняются'],
  },
]

const safetyTipsRu: [string, string][] = [
  ['.gitignore с первого коммита', 'Добавьте .env, node_modules, dist, *.log, .vscode/ до первого push. Шаблоны берите на github.com/github/gitignore.'],
  ['Branch protection rules', 'Включите защиту main: required reviews, required status checks, запрет force-push. Без зелёного CI мерж не пройдёт.'],
  ['CODEOWNERS', 'Файл .github/CODEOWNERS автоматически назначает ревьюера по пути файла. Полезно в больших проектах.'],
  ['Secret scanning', 'GitHub сам ловит утечки токенов. Включите push protection — он блокирует push, если нашёл секрет.'],
  ['Dependabot', 'Автоматически создаёт PR с обновлением уязвимых зависимостей и раз в неделю обновляет либы.'],
  ['Signed commits', 'GPG или SSH-подпись коммитов подтверждает авторство. В GitHub появляется бейдж Verified.'],
]

const glossaryRu: GlossaryItem[] = [
  { term: 'Repository (репозиторий)', definition: 'Папка проекта + скрытая папка `.git/` с дневником всех изменений. Аналогия: проектная папка с встроенной машиной времени.' },
  { term: 'Commit (коммит)', definition: 'Снимок состояния всех файлов в момент времени + автор + сообщение. Аналогия: сейв в игре.' },
  { term: 'Branch (ветка)', definition: 'Параллельная линия развития. На самом деле просто указатель на коммит. В Git ветки бесплатные — делайте под каждую задачу свою.' },
  { term: 'main / master', definition: 'Главная ветка проекта. Раньше называлась master, теперь почти везде main. В неё попадает только готовый, прошедший ревью код.' },
  { term: 'Remote', definition: 'Удалённая копия репозитория, обычно на GitHub. Команды push/pull общаются именно с remote.' },
  { term: 'origin', definition: 'Имя по умолчанию для основного remote. После `git clone` оно создаётся автоматически.' },
  { term: 'upstream', definition: 'Принятое имя для оригинального репозитория, от которого вы сделали форк. Через него синхронизируются с оригиналом.' },
  { term: 'clone', definition: 'Скачать репозиторий целиком (со всей историей) на свой компьютер первый раз.' },
  { term: 'fetch', definition: 'Узнать, что нового на remote, но к своим файлам не применять. Безопасная команда — ничего не ломает.' },
  { term: 'pull', definition: 'fetch + автоматическое слияние с вашей текущей веткой. Утренняя команда «забрать все новости».' },
  { term: 'push', definition: 'Отправить свои локальные коммиты на remote. Пока не сделали push — никто не видит ваших изменений.' },
  { term: 'Pull Request (PR / MR)', definition: 'Заявка «возьмите мой код в основную ветку». В GitLab называется Merge Request — это то же самое.' },
  { term: 'Draft PR', definition: 'Черновой PR. Видно команде, можно обсуждать, но пока не готов к merge. Полезен для ранней обратной связи.' },
  { term: 'Code review', definition: 'Чтение и обсуждение PR коллегами перед merge. Цель — найти проблемы и поделиться знанием, а не унизить автора.' },
  { term: 'Approve / Request changes', definition: 'Два главных вердикта ревьювера. Approve = «можно мержить», Request changes = «нужно поправить».' },
  { term: 'Fork', definition: 'Личная копия чужого репозитория на GitHub. Используется, чтобы предложить правки в проект, на который у вас нет прав.' },
  { term: 'Merge', definition: 'Объединение двух веток. Git создаёт «merge-коммит» с двумя родителями. История сохраняется как было.' },
  { term: 'Rebase', definition: 'Перенос ваших коммитов на верхушку другой ветки. История становится линейной, но коммиты получают новые хэши (это переписывание).' },
  { term: 'Squash', definition: 'Слить несколько коммитов в один. Часто применяется при merge PR (pull request) — чтобы в main был один аккуратный коммит на фичу.' },
  { term: 'Cherry-pick', definition: 'Скопировать конкретный коммит из одной ветки в другую. Удобно для hotfix-ов в release-ветке.' },
  { term: 'Revert', definition: 'Создать новый коммит, который отменяет изменения старого. Безопасно для общих веток — историю не переписывает.' },
  { term: 'Reset', definition: 'Перевести HEAD на другой коммит. `--soft` сохранит файлы, `--hard` сотрёт всё. Опасная команда — переписывает историю.' },
  { term: 'reflog', definition: 'История перемещений HEAD за последние 90 дней. Спасает почти от любого «я всё сломал»: даёт хэши, к которым можно вернуться.' },
  { term: 'Stash', definition: 'Временный «карман» для незакоммиченных правок. Положили (`stash push`), переключились на другое, вернули (`stash pop`).' },
  { term: 'HEAD', definition: 'Закладка «вы находитесь здесь». Указывает на текущий коммит. Обычно через текущую ветку.' },
  { term: 'Detached HEAD', definition: 'HEAD указывает прямо на коммит, а не на ветку. Новые коммиты в этом состоянии «висят в воздухе» — после переключения их можно потерять.' },
  { term: 'Tag (тег)', definition: 'Неизменяемая метка коммита. Обычно для релизов: `v1.0.0`, `v2.3.1`. Из тегов GitHub собирает Releases.' },
  { term: 'Release', definition: 'Страница на GitHub, которая привязана к тегу. Содержит changelog, скачиваемые архивы, бинарники.' },
  { term: 'Conflict (конфликт)', definition: 'Двое поменяли одну и ту же строку. Git вставляет маркеры `<<<`/`===`/`>>>` — нужно вручную выбрать правильный вариант.' },
  { term: 'CI', definition: 'Continuous Integration — автоматическая сборка и тестирование при каждом push. На GitHub это GitHub Actions.' },
  { term: 'GitHub Actions', definition: 'Сервис автоматизации внутри GitHub. Сценарии в `.github/workflows/*.yml`. Бесплатные минуты есть у каждого аккаунта.' },
  { term: 'Workflow', definition: 'YAML-файл с описанием автоматизации: когда запускать, на чём, какие шаги. Один репо может иметь несколько workflow-ов.' },
  { term: 'Runner', definition: 'Сервер, где выполняется workflow. GitHub предоставляет свои бесплатные runner-ы (Linux/Windows/macOS), можно поднять свой self-hosted.' },
  { term: 'Secret', definition: 'Безопасное хранилище токенов и ключей в Settings репозитория. В workflow доступны как `${{ secrets.NAME }}`, в логах не светятся.' },
  { term: 'Issue', definition: 'Задача, баг или идея в трекере GitHub. Можно ссылаться номером (`#42`), привязывать к PR, группировать в проекты.' },
  { term: 'Label (метка)', definition: 'Цветной ярлык на issue/PR: `bug`, `feature`, `good first issue`. Помогает фильтровать.' },
  { term: 'Milestone', definition: 'Группа issue/PR, объединённых общей целью или датой (например, «Релиз v2.0»). Показывает прогресс.' },
  { term: 'Project (board)', definition: 'Канбан-доска или таблица для управления задачами. Карточки могут автоматически менять статус по событиям.' },
  { term: 'Branch protection', definition: 'Правила для веток: запрет прямого push, требование PR с approve, обязательный зелёный CI, защита от force-push.' },
  { term: 'CODEOWNERS', definition: 'Файл `.github/CODEOWNERS`, в котором указано, кто отвечает за какие части кода. GitHub сам назначит ревьюверов в PR.' },
  { term: '.gitignore', definition: 'Список путей, которые Git должен игнорировать (`node_modules/`, `.env`, `dist/`). Без него в репо попадает мусор.' },
  { term: '.gitattributes', definition: 'Настройки обработки файлов: переносы строк (eol), бинарность, фильтры. Главное — единые переводы строк в команде.' },
  { term: 'SSH key', definition: 'Пара криптоключей для авторизации без пароля. Публичный — на GitHub, приватный — у вас. Современный вариант: ed25519.' },
  { term: 'Personal Access Token (PAT)', definition: 'Токен вместо пароля для HTTPS-операций и API. Создаётся в Settings → Developer settings.' },
  { term: 'Force-push', definition: 'Перезапись истории remote. Опасно для общих веток — у коллег ломается история.' },
  { term: 'Force-with-lease', definition: 'Безопасный вариант force-push: отменится, если на remote появились коммиты, которых у вас нет.' },
  { term: 'Submodule', definition: 'Репозиторий внутри репозитория, привязанный к конкретному коммиту. Удобно для общих библиотек, но требует `--recurse-submodules`.' },
  { term: 'LFS (Large File Storage)', definition: 'Расширение Git для больших бинарных файлов: в репо хранится только указатель, сам файл — на отдельном сервере.' },
  { term: 'Monorepo', definition: 'Несколько проектов в одном репозитории. Удобно для общего CI и шаринга кода, но требует настроек.' },
  { term: 'Trunk-based', definition: 'Стратегия: одна основная ветка `main`, короткоживущие feature-ветки (1–2 дня), частые merge-ы. Минимум конфликтов.' },
  { term: 'Git Flow', definition: 'Старая стратегия с ветками develop, release, hotfix. Сложнее, чем нужно для большинства проектов.' },
  { term: 'gh CLI', definition: 'Официальная утилита GitHub для терминала. Открывает PR, смотрит CI, скачивает релизы — всё без браузера.' },
  { term: 'Conventional Commits', definition: 'Формат сообщений: `feat:`, `fix:`, `chore:`, `docs:`. По нему автогенерируется changelog и определяется версия.' },
  { term: 'Dependabot', definition: 'Бот GitHub, который шлёт PR с обновлениями уязвимых зависимостей. Включается в Settings → Code security.' },
  { term: 'Secret scanning', definition: 'Автоматический поиск токенов и ключей в коде. Push protection блокирует commit с секретом ещё до push.' },
]

// Pick the right language for content arrays. EN data lives in ./data-en.ts.
const commands = (lang === 'en' ? commandsEn : commandsRu) as unknown as Command[]
const workflows = (lang === 'en' ? workflowsEn : workflowsRu) as unknown as WorkflowStep[]
const extensions = (lang === 'en' ? extensionsEn : extensionsRu) as unknown as readonly (readonly [string, string])[]
const extWorkflowSteps = (lang === 'en' ? extWorkflowStepsEn : extWorkflowStepsRu) as ExtWorkflowStep[]
const flagGroups = (lang === 'en' ? flagGroupsEn : flagGroupsRu) as FlagGroup[]
const concepts = (lang === 'en' ? conceptsEn : conceptsRu) as unknown as Concept[]
const tracks = (lang === 'en' ? tracksEn : tracksRu) as unknown as Track[]
const cases = (lang === 'en' ? casesEn : casesRu) as unknown as Case[]
const strategies = (lang === 'en' ? strategiesEn : strategiesRu) as unknown as Strategy[]
const safetyTips = (lang === 'en' ? safetyTipsEn : safetyTipsRu) as [string, string][]
const glossary = (lang === 'en' ? glossaryEn : glossaryRu) as GlossaryItem[]

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="toolbar" role="group" aria-label="${t().themeLabel} / ${t().langLabel}">
    <div class="toolbar-group" role="group" aria-label="${t().themeLabel}">
      <button class="toolbar-button${theme === 'light' ? ' is-active' : ''}" data-theme="light" type="button" title="${t().themeLight}">☀</button>
      <button class="toolbar-button${theme === 'dark' ? ' is-active' : ''}" data-theme="dark" type="button" title="${t().themeDark}">☾</button>
    </div>
    <div class="toolbar-group" role="group" aria-label="${t().langLabel}">
      <button class="toolbar-button${lang === 'ru' ? ' is-active' : ''}" data-lang="ru" type="button">RU</button>
      <button class="toolbar-button${lang === 'en' ? ' is-active' : ''}" data-lang="en" type="button">EN</button>
    </div>
  </div>

  <header class="hero" id="top">
    <div class="hero__grid">
      <section class="hero__copy">
        <p class="eyebrow">${t().heroEyebrow}</p>
        <h1>${t().heroTitle}</h1>
        <p class="lead">${t().heroLead}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#start">${t().heroBtnStart}</a>
          <a class="button button--ghost" href="#workflow">${t().heroBtnFlow}</a>
        </div>
        ${t().enNotice ? `<p class="en-notice">${t().enNotice}</p>` : ''}
      </section>
      <section class="terminal-showcase" aria-label="${t().terminalAria}">
        <div class="terminal-bar"><span></span><span></span><span></span></div>
        <pre><code>$ git checkout -b feature/team-guide
$ git add .
$ git commit -m "Add GitHub workflow guide"
$ git push -u origin feature/team-guide
$ gh pr create --fill --base main</code></pre>
        <div class="branch-map" aria-hidden="true">
          <span class="node node--main">main</span>
          <span class="line"></span>
          <span class="node node--feature">feature</span>
          <span class="line line--merge"></span>
          <span class="node node--pr">PR</span>
        </div>
      </section>
    </div>
  </header>

  <main>
    <section class="section section--tinted" id="basics">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.basics}</p>
        <h2>${t().h2.basics}</h2>
        <p>${t().intro.basics}</p>
      </div>
      <div class="concept-grid" id="concept-grid"></div>
    </section>

    <section class="section" id="start">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.start}</p>
        <h2>${t().h2.start}</h2>
        <p>${t().intro.start}</p>
      </div>
      <div class="setup-grid">
        ${t().setupCards.map(([title, text], index) => `
          <article class="setup-card">
            <span class="step-number">${index + 1}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section section--tinted" id="commands">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.commands}</p>
        <h2>${t().h2.commands}</h2>
        <p>${t().intro.commands}</p>
      </div>
      <div class="command-layout">
        <input id="command-search" class="command-search" type="search" placeholder="${t().cmdSearchPh}" aria-label="${t().cmdSearchAria}" />
        <div class="filter-bar" role="tablist" aria-label="${t().filterAria}">
          <button class="filter-button is-active" data-stage="all" type="button">${t().stages.all}</button>
          <button class="filter-button" data-stage="start" type="button">${t().stages.start}</button>
          <button class="filter-button" data-stage="daily" type="button">${t().stages.daily}</button>
          <button class="filter-button" data-stage="branch" type="button">${t().stages.branch}</button>
          <button class="filter-button" data-stage="pr" type="button">${t().stages.pr}</button>
          <button class="filter-button" data-stage="history" type="button">${t().stages.history}</button>
          <button class="filter-button" data-stage="rescue" type="button">${t().stages.rescue}</button>
        </div>
        <div class="command-list" id="command-list"></div>
      </div>
    </section>

    <section class="section" id="workflow">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.workflow}</p>
        <h2>${t().h2.workflow}</h2>
        <p>${t().intro.workflow}</p>
      </div>
      <div class="workflow-shell">
        <div class="workflow-tabs" id="workflow-tabs"></div>
        <article class="workflow-detail" id="workflow-detail"></article>
      </div>
    </section>

    <section class="section section--tinted" id="cases">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.cases}</p>
        <h2>${t().h2.cases}</h2>
        <p>${t().intro.cases}</p>
      </div>
      <div class="case-tags" role="tablist" aria-label="${t().caseTagsAria}">
        <button class="tag-pill is-active" data-tag="all" type="button">${t().tagLabels.all}</button>
        <button class="tag-pill" data-tag="oops" type="button">${t().tagLabels.oops}</button>
        <button class="tag-pill" data-tag="team" type="button">${t().tagLabels.team}</button>
        <button class="tag-pill" data-tag="security" type="button">${t().tagLabels.security}</button>
        <button class="tag-pill" data-tag="history" type="button">${t().tagLabels.history}</button>
        <button class="tag-pill" data-tag="release" type="button">${t().tagLabels.release}</button>
      </div>
      <div class="case-grid" id="case-grid"></div>
    </section>

    <section class="section" id="strategies">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.strategies}</p>
        <h2>${t().h2.strategies}</h2>
        <p>${t().intro.strategies}</p>
      </div>
      <div class="strategy-grid">
        ${strategies.map((s, i) => `
          <article class="strategy-card">
            <div class="strategy-viz">${STRATEGY_VIZ[i]}</div>
            <h3>${s.name}</h3>
            <p class="strategy-summary">${s.summary}</p>
            <p class="strategy-when"><strong>${t().strategyWhen}</strong> ${s.when}</p>
            <div class="strategy-cols">
              <div>
                <p class="strategy-label strategy-label--pro">${t().strategyPros}</p>
                <ul>${s.pros.map((p) => `<li>${p}</li>`).join('')}</ul>
              </div>
              <div>
                <p class="strategy-label strategy-label--con">${t().strategyCons}</p>
                <ul>${s.cons.map((c) => `<li>${c}</li>`).join('')}</ul>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section section--tinted" id="safety">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.safety}</p>
        <h2>${t().h2.safety}</h2>
        <p>${t().intro.safety}</p>
      </div>
      <div class="safety-grid">
        ${safetyTips.map(([title, text]) => `
          <article class="safety-card">
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section section--split" id="extensions">
      <div class="section__head section__head--left">
        <p class="eyebrow">${t().eyebrows.extensions}</p>
        <h2>${t().h2.extensions}</h2>
        <p>${t().intro.extensions}</p>
      </div>
      <div class="extension-grid">
        ${extensions.map(([name, text]) => `
          <article class="extension-card">
            <div class="extension-icon">${name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
            <h3>${name}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section" id="ext-workflow">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.extWorkflow}</p>
        <h2>${t().h2.extWorkflow}</h2>
        <p>${t().intro.extWorkflow}</p>
      </div>
      <div class="ext-wf-timeline">
        ${extWorkflowSteps.map((step) => `
          <article class="ext-wf-step">
            <div class="ext-wf-stage">${step.stage}</div>
            <div class="ext-wf-body">
              <h3 class="ext-wf-title">${step.title}</h3>
              <div class="ext-wf-extensions">
                ${step.extensions.map((ext) => `
                  <div class="ext-wf-ext">
                    <span class="ext-wf-ext-badge">${ext.name}</span>
                    <span class="ext-wf-ext-action">${ext.action}</span>
                  </div>
                `).join('')}
              </div>
              <div class="ext-wf-commands">
                ${step.commands.map((cmd) => `<code>${cmd}</code>`).join('')}
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section section--tinted" id="flags">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.flags}</p>
        <h2>${t().h2.flags}</h2>
        <p>${t().intro.flags}</p>
      </div>
      <div class="flags-grid">
        ${flagGroups.map((g) => `
          <details class="flag-group">
            <summary class="flag-group-head"><code>${g.command}</code></summary>
            <table class="flag-table">
              <thead><tr><th>Флаг</th><th>${lang === 'en' ? 'Meaning' : 'Что делает'}</th><th>${lang === 'en' ? 'Example' : 'Пример'}</th></tr></thead>
              <tbody>
                ${g.flags.map((f) => `
                  <tr>
                    <td><code>${f.flag}</code></td>
                    <td>${f.meaning}</td>
                    <td><code>${f.example}</code></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </details>
        `).join('')}
      </div>
    </section>

    <section class="section" id="glossary">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.glossary}</p>
        <h2>${t().h2.glossary}</h2>
        <p>${t().intro.glossary}</p>
      </div>
      <input id="glossary-search" class="command-search" type="search" placeholder="${t().glossarySearchPh}" aria-label="${t().glossarySearchAria}" />
      <dl class="glossary" id="glossary-list"></dl>
    </section>

    <section class="section" id="tracks">
      <div class="section__head">
        <p class="eyebrow">${t().eyebrows.tracks}</p>
        <h2>${t().h2.tracks}</h2>
        <p>${t().intro.tracks}</p>
      </div>
      <div class="track-tabs" role="tablist" id="track-tabs"></div>
      <div class="track-panel" id="track-panel"></div>
    </section>

  </main>

  <footer class="footer">
    <p>${t().footer}</p>
    <a href="#top">${t().footerTop}</a>
  </footer>
`

// --- Toolbar handlers ---
const toolbar = document.querySelector<HTMLDivElement>('.toolbar')!
toolbar.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.toolbar-button')
  if (!btn) return
  if (btn.dataset.theme) {
    theme = btn.dataset.theme as Theme
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    toolbar.querySelectorAll<HTMLButtonElement>('[data-theme]').forEach((b) => b.classList.toggle('is-active', b.dataset.theme === theme))
  } else if (btn.dataset.lang && btn.dataset.lang !== lang) {
    localStorage.setItem('lang', btn.dataset.lang)
    location.reload()
  }
})


const commandList = document.querySelector<HTMLDivElement>('#command-list')!
const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.filter-button'))
const commandSearch = document.querySelector<HTMLInputElement>('#command-search')!
let activeStage = 'all'
let commandQuery = ''

function renderCommands() {
  const q = commandQuery.trim().toLowerCase()
  const visibleCommands = commands.filter((item) => {
    if (activeStage !== 'all' && item.stage !== activeStage) return false
    if (!q) return true
    return (item.command + ' ' + item.meaning + ' ' + item.when + ' ' + item.tip).toLowerCase().includes(q)
  })
  if (visibleCommands.length === 0) {
    commandList.innerHTML = `<p class="empty-note">${t().cmdEmpty}</p>`
    return
  }
  commandList.innerHTML = visibleCommands.map((item) => `
    <article class="command-card">
      <div>
        <code>${item.command}</code>
        <button class="copy-button" type="button" data-copy="${item.command.replace(/"/g, '&quot;')}">${t().cmdCopy}</button>
      </div>
      <p><strong>${t().cmdMeans}</strong> ${item.meaning}</p>
      <p><strong>${t().cmdWhen}</strong> ${item.when}</p>
      <p class="tip">${item.tip}</p>
    </article>
  `).join('')
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('is-active'))
    button.classList.add('is-active')
    activeStage = button.dataset.stage ?? 'all'
    renderCommands()
  })
})

commandSearch.addEventListener('input', () => {
  commandQuery = commandSearch.value
  renderCommands()
})

commandList.addEventListener('click', async (event) => {
  const target = event.target as HTMLElement
  if (!target.matches('.copy-button')) return
  const value = target.getAttribute('data-copy') ?? ''
  try {
    await navigator.clipboard.writeText(value)
    target.textContent = t().cmdCopied
    window.setTimeout(() => { target.textContent = t().cmdCopy }, 1300)
  } catch {
    target.textContent = t().cmdCopyFail
  }
})

const workflowTabs = document.querySelector<HTMLDivElement>('#workflow-tabs')!
const workflowDetail = document.querySelector<HTMLElement>('#workflow-detail')!

function renderWorkflow(activeIndex: number) {
  workflowTabs.innerHTML = workflows.map((item, index) => `
    <button class="workflow-tab ${index === activeIndex ? 'is-active' : ''}" type="button" data-index="${index}">
      <span>${String(index + 1).padStart(2, '0')}</span>${item.title}
    </button>
  `).join('')

  const active = workflows[activeIndex]
  workflowDetail.innerHTML = `
    <p class="role">${active.role}</p>
    <h3>${active.title}</h3>
    <p>${active.body}</p>
    <pre><code>${active.commands.join('\n')}</code></pre>
  `
}

workflowTabs.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  const button = target.closest<HTMLButtonElement>('.workflow-tab')
  if (!button) return
  renderWorkflow(Number(button.dataset.index ?? 0))
})

renderCommands()
renderWorkflow(0)

// --- Cases ---
const caseGrid = document.querySelector<HTMLDivElement>('#case-grid')!
const tagButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.tag-pill'))
let activeTag: string = 'all'

function renderCases() {
  const visible = activeTag === 'all' ? cases : cases.filter((c) => c.tag === activeTag)
  caseGrid.innerHTML = visible.map((c) => `
    <details class="case-card" open>
      <summary>
        <span class="case-icon" aria-hidden="true">${c.icon}</span>
        <span class="case-title">${c.title}</span>
        <span class="case-tag case-tag--${c.tag}">${t().caseTagSingle[c.tag]}</span>
      </summary>
      <div class="case-body">
        <div class="case-viz">${VIZ[c.viz]}</div>
        <p><strong>${t().caseProblem}</strong> ${c.problem}</p>
        <p><strong>${t().caseSolution}</strong> ${c.solution}</p>
        <pre><code>${c.commands.join('\n')}</code></pre>
      </div>
    </details>
  `).join('')
}

tagButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tagButtons.forEach((b) => b.classList.remove('is-active'))
    button.classList.add('is-active')
    activeTag = button.dataset.tag ?? 'all'
    renderCases()
  })
})

renderCases()

// --- Shared formatters ---
const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const tickToCode = (s: string) => s.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`)
const fmt = (s: string) => tickToCode(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

// --- Glossary ---
const glossaryList = document.querySelector<HTMLDListElement>('#glossary-list')!
const glossarySearch = document.querySelector<HTMLInputElement>('#glossary-search')!

function renderGlossary() {
  const q = glossarySearch.value.trim().toLowerCase()
  const visible = !q ? glossary : glossary.filter((g) => (g.term + ' ' + g.definition).toLowerCase().includes(q))
  if (visible.length === 0) {
    glossaryList.innerHTML = `<p class="empty-note">${t().glossaryEmpty}</p>`
    return
  }
  glossaryList.innerHTML = visible.map((g) => `
    <div class="glossary-item">
      <dt>${g.term}</dt>
      <dd>${tickToCode(g.definition)}</dd>
    </div>
  `).join('')
}

glossarySearch.addEventListener('input', renderGlossary)
renderGlossary()

// --- Concepts (basics) ---
const conceptGrid = document.querySelector<HTMLDivElement>('#concept-grid')!
conceptGrid.innerHTML = concepts.map((c) => `
  <article class="concept-card" id="concept-${c.id}">
    <header class="concept-head">
      <h3>${c.title}</h3>
      <p class="concept-short">${c.short}</p>
    </header>
    <div class="concept-viz">${BASICS_VIZ[c.viz]}</div>
    <div class="concept-body">
      <p class="concept-analogy"><span class="concept-tag concept-tag--analogy">${t().conceptTagAnalogy}</span>${fmt(c.analogy)}</p>
      <p class="concept-detail"><span class="concept-tag concept-tag--detail">${t().conceptTagDetail}</span>${fmt(c.detail)}</p>
      <p class="concept-practice"><span class="concept-tag concept-tag--practice">${t().conceptTagPractice}</span>${fmt(c.practice)}</p>
      <p class="concept-pitfall"><span class="concept-tag concept-tag--pitfall">${t().conceptTagPitfall}</span>${fmt(c.pitfall)}</p>
    </div>
  </article>
`).join('')

// --- Tracks (практикум) ---
const trackTabs = document.querySelector<HTMLDivElement>('#track-tabs')!
const trackPanel = document.querySelector<HTMLDivElement>('#track-panel')!
let activeTrack = 0

trackTabs.innerHTML = tracks.map((tr, i) => `
  <button class="track-tab${i === 0 ? ' is-active' : ''}" data-index="${i}" type="button" role="tab">
    <span class="track-tab__emoji" aria-hidden="true">${tr.emoji}</span>
    <span class="track-tab__meta">
      <span class="track-tab__level">${tr.level}</span>
      <span class="track-tab__title">${tr.title}</span>
    </span>
  </button>
`).join('')

function renderTrack(index: number) {
  const tr = tracks[index]
  trackPanel.innerHTML = `
    <p class="track-intro">${tr.intro}</p>
    <ol class="track-list">
      ${tr.exercises.map((ex, i) => `
        <li class="track-exercise">
          <div class="track-num">${i + 1}</div>
          <div class="track-content">
            <h4>${ex.title}</h4>
            <p class="track-goal"><strong>${t().trackGoal}</strong> ${ex.goal}</p>
            <ol class="track-steps">
              ${ex.steps.map((s) => `<li>${tickToCode(s)}</li>`).join('')}
            </ol>
            <p class="track-done"><span class="track-done-mark">✓</span> ${tickToCode(ex.done)}</p>
          </div>
        </li>
      `).join('')}
    </ol>
  `
}

trackTabs.addEventListener('click', (e) => {
  const button = (e.target as HTMLElement).closest<HTMLButtonElement>('.track-tab')
  if (!button) return
  activeTrack = Number(button.dataset.index)
  trackTabs.querySelectorAll('.track-tab').forEach((b) => b.classList.remove('is-active'))
  button.classList.add('is-active')
  renderTrack(activeTrack)
})

renderTrack(0)

// --- Side navigation: persistent left menu with expanded sub-options ---
type SideChild = { label: string; action: () => void }
type SideEntry = { id: string; label: string; children?: SideChild[] }

const stagesEntries = Object.entries(t().stages) as Array<[string, string]>
const tagEntries = Object.entries(t().tagLabels) as Array<[string, string]>

const triggerCommandStage = (stage: string) => {
  const btn = filterButtons.find((b) => b.dataset.stage === stage)
  btn?.click()
}
const triggerCaseTag = (tag: string) => {
  const btn = tagButtons.find((b) => b.dataset.tag === tag)
  btn?.click()
}
const triggerWorkflowStep = (i: number) => renderWorkflow(i)
const triggerTrack = (i: number) => {
  activeTrack = i
  trackTabs.querySelectorAll<HTMLButtonElement>('.track-tab').forEach((b, idx) => b.classList.toggle('is-active', idx === i))
  renderTrack(i)
}

const sideEntries: SideEntry[] = [
  { id: 'basics', label: t().nav.basics },
  { id: 'start', label: t().nav.start },
  {
    id: 'commands',
    label: t().nav.commands,
    children: stagesEntries.map(([key, label]) => ({ label, action: () => triggerCommandStage(key) })),
  },
  {
    id: 'workflow',
    label: t().nav.workflow,
    children: workflows.map((w, i) => ({ label: `${String(i + 1).padStart(2, '0')} \u2014 ${w.title}`, action: () => triggerWorkflowStep(i) })),
  },
  {
    id: 'cases',
    label: t().nav.cases,
    children: tagEntries.map(([key, label]) => ({ label, action: () => triggerCaseTag(key) })),
  },
  { id: 'strategies', label: t().nav.strategies },
  { id: 'safety', label: t().nav.safety },
  { id: 'extensions', label: t().nav.extensions },
  {
    id: 'ext-workflow',
    label: t().nav.extWorkflow,
    children: extWorkflowSteps.map((step) => ({ label: `${step.stage} \u2014 ${step.title}`, action: () => {} })),
  },
  {
    id: 'flags',
    label: t().nav.flags,
    children: flagGroups.map((g) => ({ label: g.command, action: () => {} })),
  },
  { id: 'glossary', label: t().nav.glossary },
  {
    id: 'tracks',
    label: t().nav.tracks,
    children: tracks.map((tr, i) => ({ label: `${tr.emoji} ${tr.level} \u2014 ${tr.title}`, action: () => triggerTrack(i) })),
  },
]

const sidenav = document.createElement('aside')
sidenav.className = 'sidenav'
sidenav.setAttribute('aria-label', t().sidenavAria)
sidenav.innerHTML = `
  <button class="sidenav-toggle" type="button" aria-label="${t().sidenavToggle}" title="${t().sidenavToggle}">
    <span></span><span></span><span></span>
  </button>
  <div class="sidenav-panel">
    <p class="sidenav-title">${t().sidenavTitle}</p>
    <ol class="sidenav-list">
      ${sideEntries.map((e, idx) => `
        <li class="sidenav-item${e.children ? ' has-children' : ''}" data-section="${e.id}">
          <a class="sidenav-link" href="#${e.id}">
            <span class="sidenav-num">${String(idx + 1).padStart(2, '0')}</span>
            <span class="sidenav-label">${e.label}</span>
          </a>
          ${e.children ? `
            <ul class="sidenav-sub">
              ${e.children.map((c, ci) => `<li><button type="button" class="sidenav-sub-button" data-section="${e.id}" data-child="${ci}">${c.label}</button></li>`).join('')}
            </ul>
          ` : ''}
        </li>
      `).join('')}
    </ol>
  </div>
`
document.body.appendChild(sidenav)

const sidenavPanel = sidenav.querySelector<HTMLDivElement>('.sidenav-panel')!
const sidenavToggle = sidenav.querySelector<HTMLButtonElement>('.sidenav-toggle')!
sidenavToggle.addEventListener('click', () => {
  sidenav.classList.toggle('is-open')
})

sidenav.addEventListener('click', (event) => {
  const sub = (event.target as HTMLElement).closest<HTMLButtonElement>('.sidenav-sub-button')
  if (sub) {
    const sectionId = sub.dataset.section!
    const childIdx = Number(sub.dataset.child)
    const entry = sideEntries.find((e) => e.id === sectionId)
    entry?.children?.[childIdx]?.action()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    sidenav.classList.remove('is-open')
    return
  }
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('.sidenav-link')
  if (link) {
    sidenav.classList.remove('is-open')
  }
})

// Close mobile sidenav when clicking outside
document.addEventListener('click', (event) => {
  if (!sidenav.classList.contains('is-open')) return
  if (sidenav.contains(event.target as Node)) return
  sidenav.classList.remove('is-open')
})

void sidenavPanel

// --- Scroll spy: подсветка активного пункта навигации ---
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"], .sidenav-link[href^="#"]'))
const sectionMap = new Map<string, HTMLAnchorElement[]>()
navLinks.forEach((a) => {
  const id = a.getAttribute('href')!.slice(1)
  const arr = sectionMap.get(id) ?? []
  arr.push(a)
  sectionMap.set(id, arr)
})

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const links = sectionMap.get(entry.target.id)
    if (!links) return
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('is-active'))
      links.forEach((l) => l.classList.add('is-active'))
      // Also mark the parent sidenav-item as active so the sub-list is visually nested
      document.querySelectorAll('.sidenav-item.is-active').forEach((el) => el.classList.remove('is-active'))
      document.querySelector(`.sidenav-item[data-section="${entry.target.id}"]`)?.classList.add('is-active')
    }
  })
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 })

sectionMap.forEach((_, id) => {
  const section = document.getElementById(id)
  if (section) spyObserver.observe(section)
})

// --- Token-level tooltips for git commands ---
const tokenTips: Record<string, { ru: string; en: string }> = {
  // The git binary itself
  'git': { ru: 'Программа для управления версиями файлов', en: 'Version control program' },
  // Subcommands
  'init': { ru: 'Подкоманда: создать новый репозиторий', en: 'Subcommand: create a new repository' },
  'clone': { ru: 'Подкоманда: скачать копию проекта', en: 'Subcommand: download a copy of a project' },
  'add': { ru: 'Подкоманда: подготовить файлы к сохранению', en: 'Subcommand: stage files for saving' },
  'commit': { ru: 'Подкоманда: сохранить изменения как снимок', en: 'Subcommand: save changes as a snapshot' },
  'push': { ru: 'Подкоманда: отправить коммиты на сервер', en: 'Subcommand: send commits to the server' },
  'pull': { ru: 'Подкоманда: скачать и применить чужие изменения', en: 'Subcommand: download and apply remote changes' },
  'fetch': { ru: 'Подкоманда: проверить обновления на сервере (без изменения кода)', en: 'Subcommand: check for updates on server (without changing code)' },
  'status': { ru: 'Подкоманда: показать состояние файлов', en: 'Subcommand: show file status' },
  'log': { ru: 'Подкоманда: показать историю коммитов', en: 'Subcommand: show commit history' },
  'diff': { ru: 'Подкоманда: показать разницу между версиями', en: 'Subcommand: show differences between versions' },
  'branch': { ru: 'Подкоманда: управление ветками', en: 'Subcommand: manage branches' },
  'checkout': { ru: 'Подкоманда: переключиться на ветку/восстановить файл', en: 'Subcommand: switch branch or restore file' },
  'switch': { ru: 'Подкоманда: переключиться на другую ветку', en: 'Subcommand: switch to another branch' },
  'merge': { ru: 'Подкоманда: объединить ветки', en: 'Subcommand: merge branches' },
  'rebase': { ru: 'Подкоманда: перенести коммиты на новую базу', en: 'Subcommand: move commits onto a new base' },
  'reset': { ru: 'Подкоманда: откатить состояние назад', en: 'Subcommand: roll back state' },
  'revert': { ru: 'Подкоманда: отменить коммит новым коммитом', en: 'Subcommand: undo a commit with a new commit' },
  'stash': { ru: 'Подкоманда: спрятать изменения во временное хранилище', en: 'Subcommand: stash changes temporarily' },
  'tag': { ru: 'Подкоманда: поставить метку на коммит (версия)', en: 'Subcommand: tag a commit (version label)' },
  'remote': { ru: 'Подкоманда: управление удалёнными серверами', en: 'Subcommand: manage remote servers' },
  'cherry-pick': { ru: 'Подкоманда: применить один коммит из другой ветки', en: 'Subcommand: apply one commit from another branch' },
  'bisect': { ru: 'Подкоманда: найти коммит с багом (метод деления пополам)', en: 'Subcommand: find buggy commit (binary search)' },
  'blame': { ru: 'Подкоманда: кто менял каждую строку', en: 'Subcommand: who changed each line' },
  'clean': { ru: 'Подкоманда: удалить неотслеживаемые файлы', en: 'Subcommand: remove untracked files' },
  'config': { ru: 'Подкоманда: настройки Git', en: 'Subcommand: Git settings' },
  'rm': { ru: 'Подкоманда: удалить файл из репозитория', en: 'Subcommand: remove file from repository' },
  'mv': { ru: 'Подкоманда: переместить/переименовать файл', en: 'Subcommand: move/rename file' },
  'show': { ru: 'Подкоманда: показать детали коммита', en: 'Subcommand: show commit details' },
  'reflog': { ru: 'Подкоманда: вся история перемещений HEAD', en: 'Subcommand: full history of HEAD movements' },
  'restore': { ru: 'Подкоманда: восстановить файл до сохранённого состояния', en: 'Subcommand: restore file to saved state' },
  'worktree': { ru: 'Подкоманда: работать с несколькими ветками в разных папках', en: 'Subcommand: work with multiple branches in separate folders' },
  'submodule': { ru: 'Подкоманда: вложенный репозиторий внутри проекта', en: 'Subcommand: nested repository inside a project' },
  // Common flags
  '--global': { ru: 'Флаг: применить настройку для всех проектов на компьютере', en: 'Flag: apply setting for all projects on this computer' },
  '--local': { ru: 'Флаг: применить только для текущего репозитория', en: 'Flag: apply only for current repository' },
  '--system': { ru: 'Флаг: применить для всех пользователей системы', en: 'Flag: apply for all users on this system' },
  '--force': { ru: 'Флаг: выполнить принудительно (опасно!)', en: 'Flag: force execution (dangerous!)' },
  '-f': { ru: 'Флаг: сокращение для --force (принудительно)', en: 'Flag: short for --force (force)' },
  '--hard': { ru: 'Флаг: сбросить всё — и индекс, и рабочие файлы', en: 'Flag: reset everything — index and working files' },
  '--soft': { ru: 'Флаг: откатить коммит, но оставить файлы подготовленными', en: 'Flag: undo commit but keep files staged' },
  '--mixed': { ru: 'Флаг: откатить коммит и убрать из подготовленных', en: 'Flag: undo commit and unstage files' },
  '--oneline': { ru: 'Флаг: показать каждый коммит одной строкой', en: 'Flag: show each commit in one line' },
  '--graph': { ru: 'Флаг: нарисовать дерево веток символами', en: 'Flag: draw branch tree with symbols' },
  '--all': { ru: 'Флаг: применить ко всем (веткам/файлам)', en: 'Flag: apply to all (branches/files)' },
  '-m': { ru: 'Флаг: указать сообщение (message)', en: 'Flag: specify message' },
  '-a': { ru: 'Флаг: добавить все изменённые файлы автоматически', en: 'Flag: add all modified files automatically' },
  '-b': { ru: 'Флаг: создать новую ветку', en: 'Flag: create a new branch' },
  '-d': { ru: 'Флаг: удалить (безопасно — только если смёржена)', en: 'Flag: delete (safe — only if merged)' },
  '-D': { ru: 'Флаг: удалить принудительно (даже если не смёржена)', en: 'Flag: force delete (even if not merged)' },
  '--no-ff': { ru: 'Флаг: создать merge-коммит даже если можно без него', en: 'Flag: create merge commit even if fast-forward is possible' },
  '--squash': { ru: 'Флаг: сжать все коммиты ветки в один', en: 'Flag: squash all branch commits into one' },
  '--rebase': { ru: 'Флаг: использовать rebase вместо merge при pull', en: 'Flag: use rebase instead of merge when pulling' },
  '--prune': { ru: 'Флаг: удалить ссылки на ветки, которых уже нет на сервере', en: 'Flag: remove references to branches deleted on server' },
  '--dry-run': { ru: 'Флаг: показать что будет сделано, но не делать', en: 'Flag: show what would be done without doing it' },
  '-v': { ru: 'Флаг: подробный вывод (verbose)', en: 'Flag: verbose output' },
  '--verbose': { ru: 'Флаг: подробный вывод', en: 'Flag: verbose output' },
  '-u': { ru: 'Флаг: установить связь с удалённой веткой (upstream)', en: 'Flag: set upstream tracking branch' },
  '--set-upstream': { ru: 'Флаг: привязать локальную ветку к удалённой', en: 'Flag: link local branch to remote branch' },
  '--cached': { ru: 'Флаг: работать с подготовленными (staged) файлами', en: 'Flag: work with staged files' },
  '--staged': { ru: 'Флаг: то же что --cached — подготовленные файлы', en: 'Flag: same as --cached — staged files' },
  '-p': { ru: 'Флаг: выбирать изменения по частям (patch)', en: 'Flag: pick changes interactively (patch)' },
  '--patch': { ru: 'Флаг: интерактивный выбор изменений по кусочкам', en: 'Flag: interactively select changes in chunks' },
  '--stat': { ru: 'Флаг: показать статистику изменений (сколько строк)', en: 'Flag: show change statistics (line counts)' },
  '--amend': { ru: 'Флаг: исправить последний коммит (сообщение или файлы)', en: 'Flag: fix last commit (message or files)' },
  '--abort': { ru: 'Флаг: отменить текущую операцию (merge/rebase/cherry-pick)', en: 'Flag: abort current operation (merge/rebase/cherry-pick)' },
  '--continue': { ru: 'Флаг: продолжить операцию после разрешения конфликтов', en: 'Flag: continue operation after resolving conflicts' },
  '--skip': { ru: 'Флаг: пропустить текущий шаг и продолжить', en: 'Flag: skip current step and continue' },
  '-i': { ru: 'Флаг: интерактивный режим (выбирать действия вручную)', en: 'Flag: interactive mode (choose actions manually)' },
  '--interactive': { ru: 'Флаг: интерактивный режим', en: 'Flag: interactive mode' },
  '--depth': { ru: 'Флаг: ограничить глубину клонирования (количество коммитов)', en: 'Flag: limit clone depth (number of commits)' },
  '--no-verify': { ru: 'Флаг: пропустить проверки (хуки) — используй осторожно', en: 'Flag: skip checks (hooks) — use carefully' },
  '--allow-empty': { ru: 'Флаг: разрешить коммит без изменений', en: 'Flag: allow commit without changes' },
  '--follow': { ru: 'Флаг: отслеживать историю даже после переименования файла', en: 'Flag: track history even after file rename' },
  '-n': { ru: 'Флаг: ограничить количество результатов', en: 'Flag: limit number of results' },
  '--pretty': { ru: 'Флаг: настроить формат вывода', en: 'Flag: customize output format' },
  '--decorate': { ru: 'Флаг: показать ветки и теги рядом с коммитами', en: 'Flag: show branches and tags next to commits' },
  '--no-edit': { ru: 'Флаг: не открывать редактор для сообщения', en: 'Flag: do not open editor for message' },
  '--orphan': { ru: 'Флаг: создать ветку без истории (пустая)', en: 'Flag: create branch without history (empty)' },
  '--bare': { ru: 'Флаг: создать репозиторий без рабочих файлов (серверный)', en: 'Flag: create repository without working files (server)' },
  '-r': { ru: 'Флаг: работать с удалёнными ветками (remote)', en: 'Flag: work with remote branches' },
  '--track': { ru: 'Флаг: автоматически связать с удалённой веткой', en: 'Flag: automatically track remote branch' },
  '--mirror': { ru: 'Флаг: полное зеркало репозитория', en: 'Flag: full mirror of repository' },
  '--recurse-submodules': { ru: 'Флаг: применить также ко всем вложенным модулям', en: 'Flag: apply to all submodules too' },
  // Common arguments/values
  'origin': { ru: 'Имя удалённого сервера по умолчанию', en: 'Default remote server name' },
  'main': { ru: 'Главная ветка проекта', en: 'Main project branch' },
  'master': { ru: 'Главная ветка (старое название по умолчанию)', en: 'Main branch (old default name)' },
  'HEAD': { ru: 'Указатель на текущий коммит (где ты сейчас)', en: 'Pointer to current commit (where you are now)' },
  'HEAD~1': { ru: 'Один коммит назад от текущего', en: 'One commit back from current' },
  'HEAD~2': { ru: 'Два коммита назад от текущего', en: 'Two commits back from current' },
  'true': { ru: 'Значение: включено / да', en: 'Value: enabled / yes' },
  'false': { ru: 'Значение: выключено / нет', en: 'Value: disabled / no' },
  // Config keys
  'pull.rebase': { ru: 'Настройка: использовать rebase при git pull вместо merge', en: 'Setting: use rebase on git pull instead of merge' },
  'user.name': { ru: 'Настройка: твоё имя для подписи коммитов', en: 'Setting: your name for commit signatures' },
  'user.email': { ru: 'Настройка: твой email для подписи коммитов', en: 'Setting: your email for commit signatures' },
  'core.autocrlf': { ru: 'Настройка: автоматическое преобразование переносов строк', en: 'Setting: auto-convert line endings' },
  'push.default': { ru: 'Настройка: что push отправляет по умолчанию', en: 'Setting: what push sends by default' },
  'pull.ff': { ru: 'Настройка: поведение fast-forward при pull', en: 'Setting: fast-forward behavior on pull' },
  'init.defaultBranch': { ru: 'Настройка: имя ветки по умолчанию для новых репозиториев', en: 'Setting: default branch name for new repos' },
  'credential.helper': { ru: 'Настройка: как хранить пароли/токены', en: 'Setting: how to store passwords/tokens' },
  'fetch.prune': { ru: 'Настройка: автоудаление мёртвых ссылок при fetch', en: 'Setting: auto-prune dead refs on fetch' },
  'rebase.autoStash': { ru: 'Настройка: автоматически прятать изменения перед rebase', en: 'Setting: auto-stash changes before rebase' },
  'pull.autoStash': { ru: 'Настройка: автоматически прятать изменения перед pull', en: 'Setting: auto-stash changes before pull' },
  // Dot notation shorthand
  '.': { ru: 'Текущая папка (все файлы)', en: 'Current folder (all files)' },
  '--': { ru: 'Разделитель: после него идут имена файлов, а не опции', en: 'Separator: filenames follow, not options' },
}

// Attach per-token tooltips inside <code> elements that contain git commands
;(function attachTokenTooltips() {
  const codeEls = document.querySelectorAll<HTMLElement>('code')
  // Keys sorted longest first for greedy matching
  const tokenKeys = Object.keys(tokenTips).sort((a, b) => b.length - a.length)

  codeEls.forEach((el) => {
    const raw = el.textContent ?? ''
    // Only process elements that contain "git" keyword
    if (!/\bgit\b/.test(raw)) return
    // Skip if already processed
    if (el.dataset.tokenized) return
    el.dataset.tokenized = '1'

    // Split preserving spaces
    const parts = raw.split(/(\s+)/)
    let html = ''
    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        html += part
        return
      }
      // Try to match against token dictionary
      const key = tokenKeys.find((k) => part === k || part.toLowerCase() === k)
      if (key) {
        const tip = lang === 'en' ? tokenTips[key].en : tokenTips[key].ru
        html += `<span class="git-token-tip" data-tip="${tip.replace(/"/g, '&quot;')}">${part}</span>`
      } else {
        html += part
      }
    })
    el.innerHTML = html
  })

  // Create floating tooltip element
  const tipEl = document.createElement('div')
  tipEl.className = 'git-tip-popup'
  document.body.appendChild(tipEl)

  document.addEventListener('mouseenter', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.git-token-tip')
    if (!target) return
    const tip = target.dataset.tip
    if (!tip) return
    tipEl.textContent = tip
    tipEl.classList.add('is-visible')

    const rect = target.getBoundingClientRect()
    tipEl.style.left = `${rect.left + rect.width / 2}px`
    tipEl.style.top = `${rect.top - 8}px`
    tipEl.style.transform = 'translate(-50%, -100%)'

    // Clamp to viewport
    requestAnimationFrame(() => {
      const tipRect = tipEl.getBoundingClientRect()
      if (tipRect.left < 8) {
        tipEl.style.left = '8px'
        tipEl.style.transform = 'translate(0, -100%)'
      } else if (tipRect.right > window.innerWidth - 8) {
        tipEl.style.left = `${window.innerWidth - 8}px`
        tipEl.style.transform = 'translate(-100%, -100%)'
      }
      if (tipRect.top < 4) {
        // Show below if no space above
        tipEl.style.top = `${rect.bottom + 8}px`
        tipEl.style.transform = tipEl.style.transform.replace('-100%)', '0)')
      }
    })
  }, true)

  document.addEventListener('mouseleave', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.git-token-tip')
    if (!target) return
    tipEl.classList.remove('is-visible')
  }, true)
})()
