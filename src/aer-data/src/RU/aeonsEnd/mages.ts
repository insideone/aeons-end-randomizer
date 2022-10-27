import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'AE',
    name: 'Адельхейм',
    id: 'Adelheim',
    mageTitle: 'Маг разломов, оружейник',
    ability: `
        <h2>Эфирный страж</h2>
        <p class="ability-activation">Активируется в фазе добора исчадия.</p>
        <p>
            Когда из колоды исчадия берётся карта атаки или силы, вы можете
            сбросить её до применения эффектов.
            <span class="hint">(Другую карту взамен брать не нужно.)</span>
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок аметиста',
        expansion: 'AE',
        id: 'AmethystShard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.<br/>
              Любой союзник может взять 1 карту из своей колоды, а затем
              сбросить 1 карту из руки.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Брама',
    id: 'Brama',
    mageTitle: 'Маг разломов, старейшина',
    ability: `
        <h2>Полная чаша</h2>
        <p class="ability-activation">Активируется в вашей основной фазе.</p>
        <p>Любой игрок получает 4 жизни.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Погребённый свет',
        expansion: 'AE',
        id: 'BuriedLight',
        cost: 0,
        effect: `
            <p>
              <b>Произнесение:</b> нанесите 1 урон.<br/>
              Получите 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Цзянь',
    id: 'Jian',
    mageTitle: 'Маг разломов, сирота',
    ability: `
        <h2>Чёрное зеркало</h2>
        <p class="ability-activation">Активируется в вашей основной фазе.</p>
        <p>Произнесите подготовленное заклинание любого игрока, не сбрасывая его.</p>
        <p>Затем произнесите его снова.
        <span class="hint">(И сбросьте его как обычно.)</span></p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок лунного камня',
        expansion: 'AE',
        id: 'MoonstoneShard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.<br/>
              Получите ещё 1 <span class="aether">&AElig;</span> который можно
              потратить только на получение самоцвета.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Кадир',
    id: 'Kadir',
    mageTitle: 'Маг разломов, исследовательница',
    ability: `
        <h2>Потусторонние врата</h2>
        <p class="ability-activation">Активируется в основной фазе любого игрока.</p>
        <p>
            Этот игрок может вернуть до 3 заклинаний из своей стопки сброса в
            руку. На текущем ходу этот игрок может подготовить в каждом своём
            открытом разломе до 2 заклинаний.
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок изумруда',
        expansion: 'AE',
        id: 'EmeraldShard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.
              <span class="or">или</span>
              Любой игрок получает 1 жизнь.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Лэш',
    id: 'Lash',
    mageTitle: 'Маг разломов, разведчик',
    ability: `
        <h2>Быстрый ум</h2>
        <p class="ability-activation">Активируется в основной фазе любого игрока.</p>
        <p>
            Замешайте карту очерёдности хода любого игрока в колоду очерёдности
            хода. Этот игрок получает 1 урон.
            <span class="hint">(Нельзя выбрать карту очерёдности хода "Любой игрок".)</span>
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок кварца',
        expansion: 'AE',
        id: 'QuartzShard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.<br/>
              Откройте верхнюю карту колоды очерёдности хода. Можете положить её
              на верх или под низ колоды очерёдности хода. Если это была карта
              игрока, получите ещё 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Дымка',
    id: 'Mist',
    mageTitle: 'Маг разломов, кинжальный капитан',
    ability: `
        <h2>Divine Augury</h2>
        <p class="ability-activation">Активируется в вашей основной фазе.</p>
        <p>Любой союзник берёт 4 карты из своей колоды.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок граната',
        expansion: 'AE',
        id: 'Garnet Shard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.
              <span class="or">или</span>
              Произнесите подготовленное заклинание любого игрока.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Фаэдракса',
    id: 'Phaedraxa',
    mageTitle: 'Маг разломов, провидица',
    ability: `
        <h2>Руна прорицателя</h2>
        <p class="ability-activation">Активируется сразу после взятия карты очерёдности хода.</p>
        <p>Отмените весь урон, который в течении этого хода должны получить игроки и Грейвхолд.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Осколок турмалина',
        expansion: 'AE',
        id: 'TourmalineShard',
        cost: 0,
        effect: `
            <p>
              Получите 1 <span class="aether">&AElig;</span>.<br/>
              Любой союзник может получить 1 урон. Если он делает это, то
              уничтожает 1 карту из руки.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Заксос',
    id: 'Xaxos',
    mageTitle: 'Маг разломов, адепт',
    ability: `
        <h2>Метафизическая связь</h2>
        <p class="ability-activation">Активируется в основной фазе любого игрока.</p>
        <p>
            Союзники совместно получают 4 энергии. Откройте оставшиеся карты из
            колоды очерёдности хода и верните их обратно в любом порядке.
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Вспышка',
        expansion: 'AE',
        id: 'Flare',
        cost: 0,
        effect: `
            <p>
              <b>Произношение:</b> откройте верхнюю карту колоды очерёдности
              хода и верните её на верх колоды очерёдности хода. Если это была
              карта игрока, нанесите 3 урона. Если нет, нанесите 1 урон.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
