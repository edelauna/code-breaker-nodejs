import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex10 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());

            int count3 = 0;

            do{
                if(number%10==3){
                    count3 +=1;
                }
                number = number/10;

            } while(number>0);

            System.out.println(String.format("%s digits were equal to 3",count3));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
