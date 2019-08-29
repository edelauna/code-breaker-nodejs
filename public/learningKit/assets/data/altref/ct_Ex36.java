import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex36 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            int num = Integer.parseInt(br.readLine());
            StringBuilder bin = new StringBuilder();
            int n = num;

            while(n!=0){
                if(n%2==0){
                    bin.insert(0,"0");
                } else{
                    bin.insert(0,"1");
                }
                n /=2;
            }

            System.out.println(String.format("%s in binary: %s", num, bin.toString()));

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
