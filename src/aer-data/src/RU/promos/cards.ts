import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Море огня',
    id: 'DrownInFlames',
    cost: 6,
    effect: `
      <p>
        <b>Произнесение:</b> нанесите 4 урона приспешнику или исчадию.<br />
        Можете потерять 2 энергии, чтобы повторить этот эффект.<br />
        <span class="hint">
            (Эффекты, модифицирующие урон, влияют на каждое применение этого заклинания.)
        </span>
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Мимолётное видение',
    id: 'FleetingVision',
    cost: 3,
    effect: `
      <p>
        <b>Произнесение:</b> нанесите 2 урона.<br />
        Каждый игрок может открыть 2 верхние карты своей колоды
        и сбросить любое число из них.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Веер осколков',
    id: 'SplinterMissile',
    cost: 5,
    effect: `
      <p>
        <b>Произнесение:</b> нанесите 4 урона.<br />
        Любой союзник может сбросить 1 карту из руки. Если он делает это, можете
        распределить этот урон между исчадием и любым количеством приспешников в
        любом сочетании.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Камень эхо',
    id: 'EchoStone',
    cost: 4,
    effect: `
      <p>
        Получите 2 <span class="aether">&AElig;</span>.<br />
        Если на этом ходу вы уже играли другой "Камень эхо", получите ещё 
        1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Thieving Spirit',
    id: 'ThievingSpirit',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br />
        Gain 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Fractured Quartz',
    id: 'FracturedQuartz',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may destroy two cards in this card's supply pile. If you do, 
        gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Rock Launcher',
    id: 'RockLauncher',
    cost: 3,
    effect: `
      <p>
        Discard or destroy a card in hand. If you do, deal damage equal to its cost.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Abacus of Ignition',
    id: 'AbacusOfIgnition',
    cost: 4,
    effect: `
      <p>
        You may casdt any ally's prepped spell.<br />
        Any ally draws a card.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Illuminating Flame',
    id: 'IlluminatingFlame',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br/>
        If this was cast from an opened III or IV breach, you may destroy this.
        If you do, gain 3 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Chronal Arc',
    id: 'ChronalArc',
    cost: 7,
    effect: `
      <p>
        This spell must be prepped to two adjacent breaches so that this card 
        touches both breaches. This fully occupies both breaches.<br />
        <b>Cast:</b> Deal 4 damage.<br />
        You may place this card into your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Coruscating Sapal',
    id: 'CoruscatingSapal',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may lose 1 charge. If you do, 
        gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Humming Shell',
    id: 'HummingShell',
    cost: 7,
    effect: `
      <p>
        Destroy up to two cards in hand or discard pile.
        <span class="or">OR</span>
        Gain 2 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Force Catalyst',
    id: 'ForceCatalyst',
    cost: 4,
    effect: `
      <p>
        While prepped, during you main phase you may spend 3 <span class="aether">&AElig;</span> 
        to cast any player's prepped spell.<br />
        <b>Cast:</b> Deal 3 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Talusoid Clod',
    id: 'TalusoidClod',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
      <p>
	<b>Recall:</b> You may suffer 2 damage to return this to your hand.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Chronophage Coil',
    id: 'ChronophageCoil',
    cost: 8,
    effect: `
      <p>
        Destroy this.<br />
	Shuffle any player's turn order card into the turn order deck.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Parasitic Force',
    id: 'ParasiticForce',
    cost: 8,
    effect: `
      <p>
        You may prep this to any player's opened breach.<br />
	<b>Cast:</b> Deal 6 damage.<br />
	You may destroy up to two cards in your hand or discard pile.
      </p>
    `,
    keywords: [],
  },
]
