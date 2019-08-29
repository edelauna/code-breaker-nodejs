import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex14 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());

            for(int i = 0; i <number; i ++){
                System.out.println(fib(i));
            }


        } catch(Exception e){
            e.printStackTrace();
        }

    }

    public static int fib(int n){
        switch (n){
            case 0:
                //System.out.println("1, 0");
                return 0;
            case 1:
                return 1;
        }
        return fib(n-1) + fib(n-2);
    }
}
