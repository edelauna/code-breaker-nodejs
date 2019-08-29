import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex9 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());

            int n = number;
            boolean andChk = false;

            do{
                if(andChk){
                    System.out.println(String.format("and %s.",n%10));
                } else{
                    System.out.println(String.format("%s, ",n%10));
                    if(n/100==0 && (n/10)%10==1){
                        andChk = true;
                    }
                }
                n = n/10;

            } while(n>0);

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
