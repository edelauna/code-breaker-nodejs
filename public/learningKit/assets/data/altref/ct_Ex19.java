import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex19 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            int number;

            int cnt1 = 0;
            int cnt2 = 0;

            for(int i = 1; i <=4; i++){
                System.out.println("Input number:");
                number = Integer.parseInt(br.readLine());
                if(number<0){
                    cnt1 += number;
                }

            }

            for (int i = 1; i <= 4; i++){
                System.out.println("Input number:");
                number = Integer.parseInt(br.readLine());
                if(number>0) {
                    cnt2 += number;
                }
            }

            if(cnt1 == cnt2) {
                System.out.println(String.format("Yes"));
            } else {
                System.out.println(String.format("No"));
            }


        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
