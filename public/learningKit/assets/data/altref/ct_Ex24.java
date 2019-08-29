import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex24 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            String number;
            int value1, value2;
            do{
                System.out.println("Enter to Roll input 0 to quite");
                number = br.readLine();
                value1 = (int) Math.ceil(Math.random()*6);
                value2 = (int) Math.ceil(Math.random()*6);
                System.out.println(String.format("Dice rolls are: %s, and %s",value1,value2));
                if(value1==value2){
                    System.out.println(String.format("Doubles!"));
                }
            }while (number.trim().isEmpty());
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
