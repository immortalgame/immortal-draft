import { Piece, Quest } from "./types"

export const PIECE_WEIGHTS: Piece[] = [
  {"type":"Pawn", "slug": "p", "weight": 8/16},
  {"type":"Knight", "slug": "n", "weight": 2/16},
  {"type":"Bishop", "slug": "b", "weight": 2/16},
  {"type":"Rook", "slug": "r", "weight": 2/16},
  {"type":"Queen", "slug": "q", "weight": 1/16},
  {"type":"King", "slug": "k", "weight": 1/16}
]

export const QUEST_WEIGHTS: Quest[] = [
  {
    "code": "q37",
    "piece": "q",
    "description": "No Queen Side castling",
    "quest_reward": 102,
    "item_reward": 32,
    "weight": 0.16
  },
  {
    "code": "q31-k",
    "piece": "k",
    "description": "The King cannot be played 3 times in a row (piece quest)",
    "quest_reward": 105,
    "item_reward": 32,
    "weight": 0.15
  },
  {
    "code": "q10",
    "piece": "b",
    "description": "Win with at least 1 of my bishops remaining",
    "quest_reward": 110,
    "item_reward": 24,
    "weight": 0.14
  },
  {
    "code": "q6",
    "piece": "k",
    "description": "Win without being checked more than 2 times",
    "quest_reward": 112,
    "item_reward": 32,
    "weight": 0.14
  },
  {
    "code": "q23",
    "piece": "n",
    "description": "Capture a Pawn before any other kind of piece",
    "quest_reward": 99,
    "item_reward": 24,
    "weight": 0.14
  },
  {
    "code": "q26",
    "piece": "q",
    "description": "Don't be the first to capture anything",
    "quest_reward": 125,
    "item_reward": 32,
    "weight": 0.14
  },
  {
    "code": "q11",
    "piece": "r",
    "description": "Win with at least 1 of my rooks remaining",
    "quest_reward": 94,
    "item_reward": 28,
    "weight": 0.13
  },
  {
    "code": "q27-p",
    "piece": "p",
    "description": "Keep this Pawn alive (piece quest)",
    "quest_reward": 75,
    "item_reward": 20,
    "weight": 0.13
  },
  {
    "code": "q5",
    "piece": "p",
    "description": "Win with minimum 4 of my pawns alive",
    "quest_reward": 73,
    "item_reward": 20,
    "weight": 0.13
  },
  {
    "code": "q50",
    "piece": "k",
    "description": "Win in less than 40 moves",
    "quest_reward": 123,
    "item_reward": 32,
    "weight": 0.13
  },
  {
    "code": "q21",
    "piece": "b",
    "description": "Be the first to capture one Bishop",
    "quest_reward": 117,
    "item_reward": 24,
    "weight": 0.13
  },
  {
    "code": "q31-p",
    "piece": "p",
    "description": "This Pawn cannot be played 3 times in a row and must survive (piece quest)",
    "quest_reward": 79,
    "item_reward": 20,
    "weight": 0.12
  },
  {
    "code": "q38",
    "piece": "k",
    "description": "No King Side castling",
    "quest_reward": 132,
    "item_reward": 32,
    "weight": 0.12
  },
  {
    "code": "q30-p",
    "piece": "p",
    "description": "This Pawn cannot be played 2 times in a row and must survive",
    "quest_reward": 79,
    "item_reward": 20,
    "weight": 0.12
  },
  {
    "code": "q28-q",
    "piece": "q",
    "description": "Checkmate with the Queen (piece quest)",
    "quest_reward": 145,
    "item_reward": 32,
    "weight": 0.12
  },
  {
    "code": "q39",
    "piece": "k",
    "description": "No castling",
    "quest_reward": 133,
    "item_reward": 32,
    "weight": 0.12
  },
  {
    "code": "q22",
    "piece": "n",
    "description": "Be the first to capture one Knight",
    "quest_reward": 114,
    "item_reward": 24,
    "weight": 0.12
  },
  {
    "code": "q27-q",
    "piece": "q",
    "description": "Keep this Queen alive (piece quest)",
    "quest_reward": 134,
    "item_reward": 32,
    "weight": 0.13
  },
  {
    "code": "q27-r",
    "piece": "r",
    "description": "Keep this Rook alive (piece quest)",
    "quest_reward": 115,
    "item_reward": 28,
    "weight": 0.11
  },
  {
    "code": "q12",
    "piece": "n",
    "description": "Win with at least 1 of my knights remaining",
    "quest_reward": 120,
    "item_reward": 24,
    "weight": 0.11
  },
  {
    "code": "q31-r",
    "piece": "r",
    "description": "This Rook cannot be played 3 times in a row and must survive (piece quest)",
    "quest_reward": 123,
    "item_reward": 28,
    "weight": 0.1
  },
  {
    "code": "q31-q",
    "piece": "q",
    "description": "The Queen cannot be played 3 times in a row and must survive (piece quest)",
    "quest_reward": 160,
    "item_reward": 32,
    "weight": 0.1
  },
  {
    "code": "q27-b",
    "piece": "b",
    "description": "Keep this Bishop alive (piece quest)",
    "quest_reward": 152,
    "item_reward": 24,
    "weight": 0.1
  },
  {
    "code": "q27-n",
    "piece": "n",
    "description": "Keep this Knight alive (piece quest)",
    "quest_reward": 138,
    "item_reward": 24,
    "weight": 0.1
  },
  {
    "code": "q29-q",
    "piece": "q",
    "description": "Check at least one time with the Queen (piece quest)",
    "quest_reward": 164,
    "item_reward": 32,
    "weight": 0.1
  },
  {
    "code": "q25",
    "piece": "n",
    "description": "Capture a Knight before any other kind of piece",
    "quest_reward": 130,
    "item_reward": 24,
    "weight": 0.1
  },
  {
    "code": "q47",
    "piece": "p",
    "description": "Pawns may not advance two squares",
    "quest_reward": 92,
    "item_reward": 20,
    "weight": 0.1
  },
  {
    "code": "q35-p",
    "piece": "p",
    "description": "This Pawn must not move at all (piece quest)",
    "quest_reward": 91,
    "item_reward": 20,
    "weight": 0.1
  },
  {
    "code": "q17",
    "piece": "r",
    "description": "Be the first to capture 3 pieces",
    "quest_reward": 135,
    "item_reward": 28,
    "weight": 0.09
  },
  {
    "code": "q31-b",
    "piece": "b",
    "description": "This Bishop cannot be played 3 times in a row and must survive (piece quest)",
    "quest_reward": 162,
    "item_reward": 24,
    "weight": 0.09
  },
  {
    "code": "q33-q",
    "piece": "q",
    "description": "The Queen must capture at least 2 pieces (piece quest)",
    "quest_reward": 178,
    "item_reward": 32,
    "weight": 0.09
  },
  {
    "code": "q49",
    "piece": "k",
    "description": "Win in less than 30 moves",
    "quest_reward": 182,
    "item_reward": 32,
    "weight": 0.09
  },
  {
    "code": "q18",
    "piece": "r",
    "description": "Be the first to capture 4 pieces",
    "quest_reward": 140,
    "item_reward": 28,
    "weight": 0.09
  },
  {
    "code": "q15",
    "piece": "b",
    "description": "Be the first to capture both Bishops",
    "quest_reward": 172,
    "item_reward": 24,
    "weight": 0.09
  },
  {
    "code": "q43",
    "piece": "k",
    "description": "Do Queen Side castling",
    "quest_reward": 179,
    "item_reward": 32,
    "weight": 0.09
  },
  {
    "code": "q36",
    "piece": "b",
    "description": "Prevent Castling",
    "quest_reward": 172,
    "item_reward": 24,
    "weight": 0.09
  },
  {
    "code": "q35-r",
    "piece": "r",
    "description": "This Rook must not move at all (piece quest)",
    "quest_reward": 135,
    "item_reward": 28,
    "weight": 0.09
  },
  {
    "code": "q13",
    "piece": "k",
    "description": "Be the first to capture the Queen",
    "quest_reward": 196,
    "item_reward": 32,
    "weight": 0.07
  },
  {
    "code": "q46",
    "piece": "p",
    "description": "Have a passed Pawn",
    "quest_reward": 113,
    "item_reward": 20,
    "weight": 0.08
  },
  {
    "code": "q29-b",
    "piece": "b",
    "description": "Check at least one time with this Bishop (piece quest)",
    "quest_reward": 195,
    "item_reward": 24,
    "weight": 0.08
  },
  {
    "code": "q16",
    "piece": "n",
    "description": "Be the first to capture both Knights",
    "quest_reward": 170,
    "item_reward": 24,
    "weight": 0.08
  },
  {
    "code": "q19",
    "piece": "r",
    "description": "Be the first to capture 5 pieces",
    "quest_reward": 150,
    "item_reward": 28,
    "weight": 0.08
  },
  {
    "code": "q28-r",
    "piece": "r",
    "description": "Checkmate with this Rook (piece quest)",
    "quest_reward": 155,
    "item_reward": 28,
    "weight": 0.08
  },
  {
    "code": "q31-n",
    "piece": "n",
    "description": "This Knight cannot be played 3 times in a row and must survive (piece quest)",
    "quest_reward": 202,
    "item_reward": 24,
    "weight": 0.07
  },
  {
    "code": "q32-b",
    "piece": "b",
    "description": "This Bishop must be the first of my team to capture (piece quest)",
    "quest_reward": 220,
    "item_reward": 24,
    "weight": 0.07
  },
  {
    "code": "q20",
    "piece": "r",
    "description": "Be the first to capture one Rook",
    "quest_reward": 169,
    "item_reward": 28,
    "weight": 0.07
  },
  {
    "code": "q32-q",
    "piece": "q",
    "description": "The Queen must be the first of my team to capture (piece quest)",
    "quest_reward": 236,
    "item_reward": 32,
    "weight": 0.07
  },
  {
    "code": "q28-b",
    "piece": "b",
    "description": "Checkmate with this Bishop (piece quest)",
    "quest_reward": 218,
    "item_reward": 24,
    "weight": 0.07
  },
  {
    "code": "q35-b",
    "piece": "b",
    "description": "This Bishop must not move at all (piece quest)",
    "quest_reward": 218,
    "item_reward": 24,
    "weight": 0.06
  },
  {
    "code": "q35-n",
    "piece": "n",
    "description": "This Knight must not move at all (piece quest)",
    "quest_reward": 200,
    "item_reward": 24,
    "weight": 0.07
  },
  {
    "code": "q35-k",
    "piece": "k",
    "description": "The King must not move at all (piece quest)",
    "quest_reward": 258,
    "item_reward": 32,
    "weight": 0.06
  },
  {
    "code": "q41",
    "piece": "p",
    "description": "Promote a Pawn",
    "quest_reward": 166,
    "item_reward": 20,
    "weight": 0.07
  },
  {
    "code": "q32-p",
    "piece": "p",
    "description": "This Pawn must be the first of my team to capture (piece quest)",
    "quest_reward": 163,
    "item_reward": 20,
    "weight": 0.06
  },
  {
    "code": "q33-b",
    "piece": "b",
    "description": "This Bishop must capture at least 2 pieces (piece quest)",
    "quest_reward": 278,
    "item_reward": 24,
    "weight": 0.05
  },
  {
    "code": "q34-q",
    "piece": "q",
    "description": "This Queen must capture at least 3 pieces (piece quest)",
    "quest_reward": 305,
    "item_reward": 32,
    "weight": 0.05
  },
  {
    "code": "q29-r",
    "piece": "r",
    "description": "Check at least one time with this Rook (piece quest)",
    "quest_reward": 270,
    "item_reward": 28,
    "weight": 0.05
  },
  {
    "code": "q33-n",
    "piece": "n",
    "description": "This Knight must capture at least 2 pieces (piece quest)",
    "quest_reward": 284,
    "item_reward": 24,
    "weight": 0.05
  },
  {
    "code": "q29-n",
    "piece": "n",
    "description": "Check at least one time with this Knight (piece quest)",
    "quest_reward": 260,
    "item_reward": 24,
    "weight": 0.05
  },
  {
    "code": "q32-n",
    "piece": "n",
    "description": "This Knight must be the first of my team to capture (piece quest)",
    "quest_reward": 261,
    "item_reward": 24,
    "weight": 0.05
  },
  {
    "code": "q14",
    "piece": "r",
    "description": "Be the first to capture both Rooks",
    "quest_reward": 276,
    "item_reward": 28,
    "weight": 0.04
  },
  {
    "code": "q33-r",
    "piece": "r",
    "description": "This Rook must capture at least 2 pieces (piece quest)",
    "quest_reward": 312,
    "item_reward": 28,
    "weight": 0.04
  },
  {
    "code": "q35-q",
    "piece": "q",
    "description": "The Queen must not move at all (piece quest)",
    "quest_reward": 406,
    "item_reward": 32,
    "weight": 0.04
  },
  {
    "code": "q42",
    "piece": "p",
    "description": "Your first Pawn promoted has to be a Bishop or a Knight",
    "quest_reward": 247,
    "item_reward": 20,
    "weight": 0.04
  },
  {
    "code": "q34-b",
    "piece": "b",
    "description": "This Bishop must capture at least 3 pieces (piece quest)",
    "quest_reward": 534,
    "item_reward": 24,
    "weight": 0.03
  },
  {
    "code": "q34-n",
    "piece": "n",
    "description": "This Knight must capture at least 3 pieces (piece quest)",
    "quest_reward": 487,
    "item_reward": 24,
    "weight": 0.03
  },
  {
    "code": "q7",
    "piece": "k",
    "description": "Win in material deficit - minimum 3pts difference",
    "quest_reward": 542,
    "item_reward": 32,
    "weight": 0.03
  },
  {
    "code": "q28-n",
    "piece": "n",
    "description": "Checkmate with this Knight (piece quest)",
    "quest_reward": 426,
    "item_reward": 24,
    "weight": 0.03
  },
  {
    "code": "q34-r",
    "piece": "r",
    "description": "This Rook must capture at least 3 pieces (piece quest)",
    "quest_reward": 374,
    "item_reward": 28,
    "weight": 0.03
  },
  {
    "code": "q44",
    "piece": "p",
    "description": "Capture 'En passant'",
    "quest_reward": 353,
    "item_reward": 20,
    "weight": 0.03
  },
  {
    "code": "q33-p",
    "piece": "p",
    "description": "This Pawn must capture at least 2 pieces (piece quest)",
    "quest_reward": 384,
    "item_reward": 20,
    "weight": 0.02
  }
]