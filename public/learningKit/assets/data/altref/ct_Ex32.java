import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex32 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            System.out.println("Input n:");
            int n = Integer.parseInt(br.readLine());
            StringBuilder sb = new StringBuilder();
            for(int i =1; i<=n; i++){
                for(int k = 1; k<=n; k++ ){
                    sb.append(String.format("%-3s",k*i));
                }
                sb.append("\n");
            }
            System.out.println(String.format("%s", sb.toString()));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
