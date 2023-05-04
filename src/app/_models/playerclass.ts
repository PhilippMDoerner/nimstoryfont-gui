export interface PlayerClass{
  pk?: number;
  name: string;
  update_datetime?: string;
}

export interface CharacterPlayerClassConnection{
  pk?: number,
  player_class: number,
  character: number
  player_class_details?: PlayerClass,
}

export interface SpellClassConnection{
  pk?: number,
  player_class: number,
  spell: number
}
