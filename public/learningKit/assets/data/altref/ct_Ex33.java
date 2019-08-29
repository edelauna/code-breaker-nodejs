import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex33 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            System.out.println("Input a:");
            int a = Integer.parseInt(br.readLine());
            System.out.println("Input ^b:");
            int b = Integer.parseInt(br.readLine());

            int added = a;
            int increment = a;
            int i = 1;
            while(i <b){
                for(int j = 1; j <a; j++){
                    added+=increment;
                }
                increment=added;
                i+=1;
            }
            System.out.println(String.format("%s", added));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
