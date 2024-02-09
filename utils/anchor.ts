import {
  Program,
  AnchorProvider,
  Idl,
  setProvider,
} from "@project-serum/anchor"
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet"
import { IDL, TinyAdventure } from "../idl/tiny_adventure"
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Pier } from "@/idl/pier"

// Create a connection to the devnet cluster
export const connection = new Connection(clusterApiUrl("devnet"), {
  commitment: "confirmed",
})

// Create a placeholder wallet to set up AnchorProvider
const wallet = new NodeWallet(Keypair.generate())

// Create an Anchor provider
const provider = new AnchorProvider(connection, wallet, {})

// Set the provider as the default provider
setProvider(provider)

// Tiny Adventure program ID
const programId = new PublicKey("CMUsDN8pAEagaTBNnjbdyxgVg4TqRRCkYKeifV9wFFCf")

const pierProgramId = new PublicKey("AMy3eYbWzhYhXskNPCefUJ6BUyqH53LP4TrsRj5o6ffq")

export const program = new Program(
  IDL as Idl,
  programId
) as unknown as Program<TinyAdventure>

export const pierProgram = new Program(
  Pier as Pier,
  pierProgramId
)

// GameDataAccount PDA
export const [globalLevel1GameDataAccount] = PublicKey.findProgramAddressSync(
  [Buffer.from("level1", "utf8")],
  programId
)

export const [testAccount] = PublicKey
.findProgramAddressSync(
  [Buffer.from("test", "utf8")],
  pierProgramId
)
