import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex20 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());

            for(int i = 2; i <=number; i++){
                if(prime(i)){
                    System.out.println(String.format("%s", i));
                }

            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }

    public static boolean prime(int num){
        boolean flag = true;
        int d = 2;

        while(flag==true && d <= num/2){
            if(num%d==0){
                flag=false;
            }
            d += 1;
        }
        return flag;
    }

}
