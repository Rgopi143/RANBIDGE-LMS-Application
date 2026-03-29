import java.util.*;

/**
 * Snake and Ladder Game Implementation
 * Features:
 * - Dynamic number of players
 * - Strategic Snake and Ladder placements
 * - Exact roll requirement to win
 * - Interactive gameplay
 */
public class SnakeLadderGame {
    // Game constants
    private static final int WINNING_POSITION = 100;
    
    // Board elements
    private static final Map<Integer, Integer> snakes = new HashMap<>();
    private static final Map<Integer, Integer> ladders = new HashMap<>();

    static {
        // Initialize Ladders (Start -> End)
        ladders.put(1, 38);
        ladders.put(4, 14);
        ladders.put(9, 31);
        ladders.put(21, 42);
        ladders.put(28, 84);
        ladders.put(36, 44);
        ladders.put(51, 67);
        ladders.put(71, 91);
        ladders.put(80, 100);

        // Initialize Snakes (Start -> End)
        snakes.put(16, 6);
        snakes.put(47, 26);
        snakes.put(49, 11);
        snakes.put(56, 53);
        snakes.put(62, 19);
        snakes.put(64, 60);
        snakes.put(87, 24);
        snakes.put(93, 73);
        snakes.put(95, 75);
        snakes.put(98, 78);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("========================================");
        System.out.println("   WELCOME TO SNAKE AND LADDER GAME   ");
        System.out.println("========================================\n");

        System.out.print("Enter number of players: ");
        int numPlayers;
        try {
            numPlayers = Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            System.out.println("Invalid input! Defaulting to 2 players.");
            numPlayers = 2;
        }

        String[] playerNames = new String[numPlayers];
        int[] playerPositions = new int[numPlayers];

        for (int i = 0; i < numPlayers; i++) {
            System.out.print("Enter name for Player " + (i + 1) + ": ");
            playerNames[i] = scanner.nextLine();
            playerPositions[i] = 0; // All players start at 0
        }

        Random random = new Random();
        boolean gameFinished = false;
        int currentPlayer = 0;

        System.out.println("\nGame Started! Good Luck!\n");

        while (!gameFinished) {
            String name = playerNames[currentPlayer];
            int currentPos = playerPositions[currentPlayer];

            System.out.println("----------------------------------------");
            System.out.println(name + "'s turn (Position: " + currentPos + ")");
            System.out.print("Press ENTER to roll the dice...");
            scanner.nextLine();

            int diceRoll = random.nextInt(6) + 1;
            System.out.println("Dice Rolled: [" + diceRoll + "]");

            int nextPos = currentPos + diceRoll;

            if (nextPos > WINNING_POSITION) {
                System.out.println("Too high! You need exactly " + (WINNING_POSITION - currentPos) + " to win. Staying at " + currentPos);
            } else {
                playerPositions[currentPlayer] = nextPos;
                
                // Check for Ladders
                if (ladders.containsKey(playerPositions[currentPlayer])) {
                    int finalPos = ladders.get(playerPositions[currentPlayer]);
                    System.out.println("WOW! A LADDER! Climbing from " + playerPositions[currentPlayer] + " up to " + finalPos);
                    playerPositions[currentPlayer] = finalPos;
                } 
                // Check for Snakes
                else if (snakes.containsKey(playerPositions[currentPlayer])) {
                    int finalPos = snakes.get(playerPositions[currentPlayer]);
                    System.out.println("OH NO! A SNAKE! Sliding from " + playerPositions[currentPlayer] + " down to " + finalPos);
                    playerPositions[currentPlayer] = finalPos;
                }

                System.out.println(name + " is now at position: " + playerPositions[currentPlayer]);

                if (playerPositions[currentPlayer] == WINNING_POSITION) {
                    System.out.println("\n****************************************");
                    System.out.println("   CONGRATULATIONS! " + name.toUpperCase() + " WINS!   ");
                    System.out.println("****************************************");
                    gameFinished = true;
                    break;
                }
            }

            // Move to next player
            currentPlayer = (currentPlayer + 1) % numPlayers;
        }

        scanner.close();
        System.out.println("\nGame over. Thanks for playing!");
    }
}
