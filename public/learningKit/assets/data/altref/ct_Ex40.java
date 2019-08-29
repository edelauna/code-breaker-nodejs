import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Array;
import java.util.Arrays;

public class ct_Ex40 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            int a = Integer.parseInt(br.readLine());
            int b = Integer.parseInt(br.readLine());
            int c = Integer.parseInt(br.readLine());
            int x = (int) Math.ceil(Math.random()*10);
            int y = (int) Math.ceil(Math.random()*10);
            int z = (int) Math.ceil(Math.random()*10);

            int[] lotto = {x, y, z};
            int[] guess = {a,b,c};
            boolean flag = false;

            for(int i = 0; i<lotto.length; i++){
                if(lotto[i]==guess[i]){
                    flag=true;
                } else{
                    flag = false;
                }
            }

            if(flag){
                System.out.println(String.format("Correct! %s", Arrays.toString(guess)));
            } else {
                System.out.println(String.format("Incorrect! %s != %s", Arrays.toString(guess), Arrays.toString(lotto)));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
