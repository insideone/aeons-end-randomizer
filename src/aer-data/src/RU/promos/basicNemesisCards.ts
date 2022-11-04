import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Menace-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Угроза',
    effect: `
      <p>
        Игроки совместно сбрасывают 4 карты.
      </p>
    `,
  },
  {
    id: 'GlyphEnigma-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Энигма',
    hp: 7,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b><br />
        Грейвхолд получает 1 урон.<br />
        Если ранг исчадия 2 или выше, грейвхолд получает ещё 2 урона.
        <span class="hint">
            (Ранг исчадия равен рангу последней взятой карты исчадия.)
        </span>
      </p>
    `,
  },
  {
    id: 'GravitySplinter-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Расщеплённая гравитация',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b><br />
        потратьте 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>СИЛА 2:</b><br />
        натиск 2 раза.<br />
        Игрок с наименьшим числом открытых разломов получает 3 урона.
      </p>
    `,
  },
  {
    id: 'WorldPurge-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Power',
    name: 'Всемирное истребление',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b><br />
        потратьте 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>СИЛА 2:</b><br />
        натиск 3 раза.
        <span class="or">или</span>
        Грейвхолд получает 7 урона.
      </p>
    `,
  },
  {
    id: 'BaneSire-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Гибельный властитель',
    hp: 6,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b><br />
        натиск.
      </p>
    `,
  },
  {
    id: 'Decimate-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Казнь',
    effect: `
      <p>
        Натиск 2 раза, и любой игрок получает 2 энергии.
        <span class="or">или</span>
        Грейвхолд получает 4 урона.
      </p>
    `,
  },
  {
    id: 'SpiritCage-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Power',
    name: 'Клетка духа',
    power: 3,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b><br />
        сбросьте карту из руки, которая стоит 5 <span class="aether">&AElig;</span> или более.<br />
        <br />
        <b>СИЛА 3:</b><br />
        натиск 2 раза. Любой игрок сбрасывает заклинание с руки.
      </p>
    `,
  },
  {
    id: 'BanefulCrux-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Гибельная суть',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b><br />
        сбросьте 2 карты из руки, каждая из которых стоит 4 <span class="aether">&AElig;</span> или более.<br />
        <br />
        <b>СИЛА 2:</b><br />
        натиск 2 раза. Грейвхолд получает 3 урона.
      </p>
    `,
  },
  {
    id: 'Negate-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Attack',
    name: 'Отрицание',
    effect: `
      <p>
        Натиск 2 раза,<br />
        и любой игрок уничтожает самую дорогую карту из руки.
        <span class="or">или</span>
        Натиск 2 раза,<br />
        и Грейвхолд получает 3 урона.
      </p>
    `,
  },
  {
    id: 'Gallowskulk-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Minion',
    name: 'Скрытень',
    hp: 10,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b><br />
        игрок с наименьшим числом жизней получает 3 урона.
      </p>
    `,
  },
  {
    id: 'Unmake-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Attack',
    name: 'Стирание',
    effect: `
      <p>
        Натиск 2 раза.<br />
        Любой игрок уничтожает 3 верхние арты из своей колоды и получает 3 урона.
      </p>
    `,
  },
]
