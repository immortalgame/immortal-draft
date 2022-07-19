import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { argv, cwd } from 'process'
import seedRandom from 'seedrandom'
import { PickerOptions, Piece, Quest, Weighted, WithQuest } from './types'

import { QUEST_WEIGHTS, PIECE_WEIGHTS } from './weights'

const ROUGH_PER_PACK = 120
const POLISHED_PER_PACK = 16
const POA_PER_PACK = 1

const REWARD_MULTIPLIER: {[key: string]: number} = {
  "Rough": 1,
  "Polished": 2,
  "Piece of Art": 4,
  "Masterpiece": 8
}

const [quantity, seed, output] = argv.slice(2)

writeFileSync(resolve(cwd(), output), JSON.stringify(pickPacks({quantity: parseInt(quantity, 10), seed}), null, 2)) 

function pickPacks({quantity, seed}: any){
  const rng = seedRandom(seed)
  const drawn = []

  for (let i = 0; i < quantity; i++) {
      drawn.push(...pickItems({rng, weights: PIECE_WEIGHTS, itemsToPick: ROUGH_PER_PACK, purity: 'Rough'}))
      drawn.push(...pickItems({rng, weights: PIECE_WEIGHTS, itemsToPick: POLISHED_PER_PACK, purity: 'Polished'}))
      drawn.push(...pickItems({rng, weights: PIECE_WEIGHTS, itemsToPick: POA_PER_PACK, purity: 'Piece of Art'}))
  }

  return drawn
}

export function pickItems({rng, itemsToPick = 1, weights, purity}: PickerOptions): Array<Piece & WithQuest>{
  const drawn: Array<Piece & WithQuest> = []
  
  while(drawn.length < itemsToPick){
    const candidate: Piece = pick(rng(), weights)
    const availableQuest: Quest[] = QUEST_WEIGHTS
      .filter((quest: Quest) => quest.piece === candidate.slug)
      .map((quest: Quest) => ({
        ...quest,
        item_reward: quest.item_reward * (REWARD_MULTIPLIER[purity] || 1),
        quest_reward: quest.quest_reward * (REWARD_MULTIPLIER[purity] || 1)
      }))

    drawn.push({...candidate, purity, quest: pick(rng(), availableQuest)})
  }
  
  return drawn
}

function pick<T>(rand: number, weights: Array<Weighted & T>) : T {
  let x = 0
  let i = 0
  while(x < rand){
    x+= weights[i].weight 
    if(x >= rand) return weights[i]
    i+=1
  }
  return weights[weights.length - 1]
}
