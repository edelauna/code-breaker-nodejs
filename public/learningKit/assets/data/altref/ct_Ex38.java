import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex38 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            for(int i = 1; i<=10000; i++){
                if(chkPalindrome(i)) {
                    System.out.println(String.format("%s", i));
                }
            }


        } catch(Exception e){
            e.printStackTrace();
        }

    }

    public static boolean chkPalindrome(int num){
        int originalInt = num;
        int number = originalInt;
        int remainder = 0;
        int reversedInt = 0;

        do{
            reversedInt = reversedInt*10 + number%10;
            number = number/10;

        } while(number>0);

        if(originalInt==reversedInt){
            return true;
        }
        return false;
    }

}
